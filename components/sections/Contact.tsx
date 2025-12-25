import { SectionHeading } from "@/components/shared/SectionHeading"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Contact() {
    return (
        <section id="contact" className="py-24 md:py-32">
            <div className="container px-4 md:px-6 max-w-2xl mx-auto">
                <SectionHeading title="Contact" subtitle="Let's build something beautiful." className="text-center items-center" />

                <Card>
                    <CardHeader>
                        <CardTitle>Get in touch</CardTitle>
                        <CardDescription>
                            Have a project in mind? Looking for a structural partner?
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="mb-8 p-4 bg-muted/50 rounded-lg text-sm space-y-2">
                            <p className="font-semibold">嶺岸 達矢 | MINEGISHI TATSUYA</p>
                            <p>株式会社Ligatis (Ligatis Inc.)</p>
                            <p>〒104-0061 東京都中央区銀座6-13-16 Ginza Wallビル501</p>
                            <a href="mailto:minegishi@structure-designer.com" className="text-primary hover:underline">minegishi@structure-designer.com</a>
                        </div>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                                    <Input id="name" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                                    <Input id="email" type="email" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <Textarea id="message" placeholder="Tell me about your project..." className="min-h-[150px]" />
                            </div>
                            <Button type="submit" className="w-full">Send Message</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
