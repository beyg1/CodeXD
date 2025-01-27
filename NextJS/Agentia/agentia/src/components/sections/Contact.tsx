import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <section className="py-24 bg-muted bg-gradient-to-b from-primary/10 to-background bg-[#b8c1ec]">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
              <p className="mt-4 text-gray-500 md:text-xl">
                Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>contact@agentiaworld.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>+1 (555) 000-0000</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span>123 AI Street, Tech City, TC 12345</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Your email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Your message"
                className="min-h-[150px]"
              />
            </div>
            <Button className="w-full" size="lg">
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
