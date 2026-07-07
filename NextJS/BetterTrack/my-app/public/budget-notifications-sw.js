self.addEventListener('notificationclick', event => {
  event.notification.close()

  const targetUrl = event.notification.data?.url || self.location.origin

  event.waitUntil((async () => {
    const windowClients = await clients.matchAll({
      type: 'window',
      includeUncontrolled: true,
    })

    for (const client of windowClients) {
      const clientUrl = new URL(client.url)
      const target = new URL(targetUrl)

      if (clientUrl.origin !== target.origin) continue

      if ('navigate' in client && client.url !== target.href) {
        await client.navigate(target.href)
      }

      if ('focus' in client) {
        return client.focus()
      }
    }

    if ('openWindow' in clients) {
      return clients.openWindow(targetUrl)
    }
  })())
})
