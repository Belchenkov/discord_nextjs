import Image from 'next/image'
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
      <div>
        <p className="text-3xl font-bold text-indigo-500">
          Hello, Discord clone
        </p>
        {/* eslint-disable-next-line react/jsx-no-undef */}
        <Button variant="ghost">Click Me</Button>
      </div>
  )
}
