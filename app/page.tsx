import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
  Code,
  Layers,
  Smartphone,
  Database,
} from "lucide-react";
export default function Portfolio() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky px-[100px] flex justify-center top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="#" className="font-bold text-xl">
            <span className="text-primary">My</span>Portfolio
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#about"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="#education"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Education
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>
          <Button asChild>
            <Link href="#contact">Hire Me</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 px-[100px] md:py-32 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold">
                Hi, I&apos;m <span className="text-primary">Altangerel</span>
                <br />
                Web Developer
              </h1>
              <p className="text-xl text-muted-foreground">
                I build exceptional and accessible digital experiences for the
                web.
              </p>
              <div className="flex gap-4">
                <Button asChild>
                  <Link href="#projects">View Projects</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#contact">Contact Me</Link>
                </Button>
              </div>
              <div className="flex gap-4 pt-4">
                <Link
                  href="https://github.com/altangerel123"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-[400px] h-[400px]  overflow-hidden rounded-full border-4 border-primary">
                <img
                  src="me.jpg"
                  alt="Developer portrait"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        {/* About Section */}
        <section id="about" className="bg-muted/40 py-16 md:py-24 px-[100px]">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-lg">
                  IT Инженер мэргэжлээр 2024-онд Pinecone Academyыг сурч
                  төгссөн. Цаашдаа мэргэжлээрээ тууштай ажиллана. Залуу хүн
                  учраас алдах зүйл байхгүй шинэ хамт олонтой нэгдэхийг хүсэж
                  байгаа ба ажил олгогчид өөрийн хувь нэмрээ оруулж, өөрт үнэ
                  цэнтэй туршлага хуримтлуулах зорилготой.
                </p>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-bold">SKILLS</h3>
                    <p className="text-muted-foreground">
                      ➢ Аливаа зүйлийг хурдан сурч ойлгодог
                      <br /> ➢ Цаг баримтлах
                      <br /> ➢ Дасан зохицох чадвартай
                      <br /> ➢ Багаар ажиллах чадвартай
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold">Hobbies</h3>
                    <p className="text-muted-foreground">
                      ➢ Гар бөмбөг
                      <br /> тоглох
                      <br /> ➢ Бүжиглэх
                      <br /> ➢ Аялах
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold">Location</h3>
                    <p className="text-muted-foreground">
                      Жаргалан-Эрдэнэ хотхон,ХУД 20-р хороо,Улаанбаатар
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold">Achievements</h3>
                    <p className="text-muted-foreground">
                      ➢ 1-р зэрэг(Гар бөмбөг)
                      <br /> ➢ Pinecone Academy-ийн Leap хөтөлбөрт суралцаж
                      Full-Stack Developer мэргэжлээр төгссөн.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Education */}
        <section
          id="education"
          className="bg-muted/40 py-16 md:py-24 px-[100px]"
        >
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            <div className="flex w-full justify-center gap-[50px]">
              <div className="w-full border rounded-[20px] p-4">
                <div className="flex justify-between">
                  <h1 className="text-[25px] font-semibold">Бүрэн дунд</h1>
                  <h1 className="text-[25px] font-semibold">
                    Sep 2011 – Jun 2023
                  </h1>
                </div>
                <p className="text-[25px] text-muted-foreground">
                  “Титэм”ЕБСсургууль,Хөвсгөл аймаг, Мөрөн сум
                </p>
              </div>
              <div className="w-full border rounded-[20px] p-4">
                <div className="flex justify-between">
                  <h1 className="text-[25px] font-semibold">
                    LEAP(Насанд хүрэгчдийн анги)
                  </h1>
                  <h1 className="text-[25px] font-semibold">
                    Sep 2023 – Jun 2024
                  </h1>
                </div>
                <p className="text-[25px] text-muted-foreground">
                  PINECONE ACADEMY,Улаанбаатар
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Skills Section */}
        <section id="skills" className="py-16 md:py-24 px-[100px]">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Code Skills</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                I&apos;ve worked with a range of technologies in the web
                development world.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <div className="bg-primary/10 p-3 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                      <Code className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Frontend</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Badge>HTML</Badge>
                      <Badge>CSS</Badge>
                      <Badge>JavaScript</Badge>
                      <Badge>TypeScript</Badge>
                      <Badge>React</Badge>
                      <Badge>Next.js</Badge>
                      <Badge>Tailwind CSS</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <div className="bg-primary/10 p-3 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                      <Database className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Backend</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Badge>Node.js</Badge>
                      <Badge>Express</Badge>
                      <Badge>MongoDB</Badge>
                      <Badge>PostgreSQL</Badge>
                      <Badge>Firebase</Badge>
                      <Badge>REST API</Badge>
                      <Badge>GraphQL</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <div className="bg-primary/10 p-3 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                      <Layers className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Tools</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Badge>Git</Badge>
                      <Badge>GitHub</Badge>
                      <Badge>VS Code</Badge>
                      <Badge>Figma</Badge>
                      <Badge>Jest</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <div className="bg-primary/10 p-3 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                      <Smartphone className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Other</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Badge>Responsive Design</Badge>
                      <Badge>Accessibility</Badge>
                      <Badge>Performance</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        {/* Projects Section */}
        <section
          id="projects"
          className="bg-muted/40 py-16 md:py-24 px-[100px]"
        >
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">My Projects</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Here are some of my recent projects. Each project reflects my
                skills and expertise.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <img src="blog.png" alt="Blog" />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Blog</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Next.js</Badge>
                      <Badge variant="outline">React.js</Badge>
                      <Badge variant="outline">Tailwind CSS</Badge>
                      <Badge variant="outline">CSS</Badge>
                    </div>
                    <div className="flex gap-4">
                      <Button size="sm" variant="outline" asChild>
                        <Link href="https://github.com/altangerel123/Blog">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Link>
                      </Button>
                      <Button size="sm" asChild>
                        <Link href="https://blogproject123.netlify.app/">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/* Project 2 */}
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <img src="todo.png" alt="Todo" />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Todo</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">HTML</Badge>
                      <Badge variant="outline">CSS</Badge>
                      <Badge variant="outline">Javascript</Badge>
                    </div>
                    <div className="flex gap-4">
                      <Button size="sm" variant="outline" asChild>
                        <Link href="https://github.com/altangerel123/Todo">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Link>
                      </Button>
                      <Button size="sm" asChild>
                        <Link href="https://todo-section.netlify.app/">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/* Project 3 */}
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <img src="tic.png" alt="Tic-tac-toe" />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Tic-tac-toe</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">HTML</Badge>
                      <Badge variant="outline">CSS</Badge>
                      <Badge variant="outline">Javascript</Badge>
                    </div>
                    <div className="flex gap-4">
                      <Button size="sm" variant="outline" asChild>
                        <Link href="https://github.com/altangerel123/Tic-tac-toe">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Link>
                      </Button>
                      <Button size="sm" asChild>
                        <Link href="https://tic-tac-toe333.netlify.app/">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/* Project 4 */}
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <img src="carousel.png" alt="Carousel" />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Carousel</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Swiper</Badge>
                      <Badge variant="outline">CSS</Badge>
                      <Badge variant="outline">Javascript</Badge>
                    </div>
                    <div className="flex gap-4">
                      <Button size="sm" variant="outline" asChild>
                        <Link href="https://github.com/altangerel123/carousel-project">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Link>
                      </Button>
                      <Button size="sm" asChild>
                        <Link href="https://carousel-page.netlify.app/">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="text-center">
              <Button variant="outline" asChild>
                <Link href="#">View All Projects</Link>
              </Button>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 px-[100px]">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Have a project in mind or want to work together? Feel free to
                reach out!
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-muted-foreground">
                        altangerelg203@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Linkedin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">LinkedIn</h4>
                      <p className="text-muted-foreground">
                        linkedin.com/in/alexjohnson
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Github className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">GitHub</h4>
                      <p className="text-muted-foreground">
                        https://github.com/altangerel123
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Send Me a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input id="subject" placeholder="Subject" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      rows={5}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-center md:text-left">
              {new Date().getFullYear()}.{new Date().getMonth()}.
              {new Date().getDay()}
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
