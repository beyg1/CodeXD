"use client";
import { signOut } from 'next-auth/react';
import { signIn } from 'next-auth/react';
export async function signOutUser() {
  await signOut( { redirect: true, callbackUrl: '/' } );
}
export async function handleGithubSignin() {
  await signIn('github', { redirect: true, callbackUrl: '/' });
}
