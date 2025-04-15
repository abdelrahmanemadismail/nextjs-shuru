"use client"

import * as React from "react"
import Image from "next/image"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

export default function ComingSoonPage() {
  const [email, setEmail] = React.useState("")
  const [name, setName] = React.useState("")
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [consent, setConsent] = React.useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && consent) {
      setLoading(true)
      // محاكاة طلب الخادم
      setTimeout(() => {
        // هنا سيتم إضافة منطق إرسال البريد الإلكتروني إلى الخادم
        setIsSubmitted(true)
        setEmail("")
        setName("")
        setConsent(false)
        setLoading(false)
        setTimeout(() => setIsSubmitted(false), 4000)
      }, 1200)
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-muted/30">
      {/* الهيدر */}
      <Header />

      {/* المحتوى الرئيسي */}
      <main className="container mx-auto max-w-6xl flex flex-1 flex-col items-center justify-center gap-10 py-12 text-center md:py-20">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="mb-6 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-foreground/30 rounded-full blur-md opacity-70"></div>
            <div className="relative">
              <Image 
                src="/Shuru-white-logo.svg" 
                alt="شعار مجلة شروع" 
                width={130} 
                height={130}
                className="h-28 w-auto dark:hidden"
                priority
              />
              <Image 
                src="/Shuru-black-logo.svg" 
                alt="شعار مجلة شروع" 
                width={130} 
                height={130}
                className="h-28 w-auto hidden dark:block"
                priority
              />
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tighter md:text-6xl lg:text-7xl mb-4">
            قريبًا... <span className="text-primary">مجلة شروع</span>
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
            المنصة الرقمية المتخصصة في مجالات إدارة المشاريع، القيادة، التحول الرقمي، والابتكار
          </p>
        </div>

        <div className="mx-auto w-full max-w-6xl">
          <div className="flex flex-col items-center gap-10">
            <div className="w-full rounded-xl border border-primary/20 bg-gradient-to-br from-background to-muted/30 p-10 shadow-xl hover:shadow-primary/5 transition-all">
              <div className="flex flex-col lg:flex-row lg:items-stretch lg:gap-10">
                <div className="mb-8 lg:mb-0 lg:w-1/2 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-3 bg-primary/10 px-4 py-2 rounded-full mb-6 self-start">
                    <Calendar className="h-5 w-5 text-primary" />
                    <p className="text-sm font-medium">موعد الإطلاق: يونيو 2025</p>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">كن أول من يعلم!</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    انضم إلى قائمة المهتمين بمجلة شروع واحصل على تحديثات حصرية ومزايا خاصة عند إطلاق المنصة.
                  </p>
                  
                  <ul className="space-y-4 mb-6">
                    {[
                      "إشعار فوري عند إطلاق المجلة",
                      "محتوى حصري للمشتركين في النشرة البريدية",
                      "نصائح وأدوات لتطوير مهاراتك القيادية",
                      "فرصة لحضور فعاليات وورش عمل مجانية"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/15 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mt-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    <span>نحن نحترم خصوصيتك. معلوماتك آمنة معنا.</span>
                  </div>
                </div>
                
                <div className="lg:w-1/2 lg:border-r lg:border-primary/10 lg:pr-10">
                  <div className="bg-card p-8 rounded-xl border border-accent/10 shadow-md">
                    <h4 className="text-xl font-semibold mb-6 text-center">انضم إلى مجتمعنا</h4>
                    
                    <form onSubmit={handleSubscribe} className="space-y-5">
                      <div className="space-y-4">
                        <div className="grid gap-2">
                          <label htmlFor="name" className="text-sm font-medium">الاسم</label>
                          <Input
                            id="name"
                            type="text"
                            placeholder="أدخل اسمك الكامل"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="h-11 bg-background border-accent/20 focus-visible:ring-primary/40"
                          />
                        </div>
                        
                        <div className="grid gap-2">
                          <label htmlFor="email" className="text-sm font-medium">البريد الإلكتروني</label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="أدخل بريدك الإلكتروني"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={loading}
                            className="h-11 bg-background border-accent/20 focus-visible:ring-primary/40"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="bg-muted/50 p-3 rounded-lg border border-accent/10">
                        <div className="flex items-start gap-3">
                          <input 
                            type="checkbox" 
                            id="consent" 
                            checked={consent}
                            onChange={(e) => setConsent(e.target.checked)}
                            className="mt-1 rounded text-primary focus:ring-primary/30"
                            required
                          />
                          <label htmlFor="consent" className="text-xs leading-relaxed">
                            أوافق على تلقي النشرة البريدية والإشعارات من مجلة شروع، وأفهم أنه يمكنني إلغاء الاشتراك في أي وقت.
                          </label>
                        </div>
                      </div>
                      
                      <Button 
                        type="submit" 
                        disabled={loading} 
                        className="w-full h-12 bg-primary hover:bg-primary/90 transition-colors text-lg font-medium"
                      >
                        {loading ? (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            جاري التسجيل...
                          </span>
                        ) : "اشترك الآن"}
                      </Button>
                    </form>
                    
                    {isSubmitted && (
                      <div className="mt-5 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 dark:bg-green-800/30 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 dark:text-green-400"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                          </div>
                          <div>
                            <p className="font-medium text-green-800 dark:text-green-400">تم التسجيل بنجاح!</p>
                            <p className="text-xs text-green-700 dark:text-green-500 mt-1">سنقوم بالتواصل معك قريبًا بخصوص إطلاق المجلة.</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid w-full gap-5 text-center">
              <h2 className="text-2xl font-semibold mb-2">ما يمكنك توقعه</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="group rounded-xl border border-accent/20 bg-card p-8 shadow-sm transition-all hover:shadow-md hover:border-primary/30">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
                  </div>
                  <h3 className="text-xl font-medium mb-2">مقالات متخصصة</h3>
                  <p className="text-sm text-muted-foreground">
                    محتوى عربي احترافي مدعوم بدراسات حالة وأبحاث متعمقة لتطوير مهاراتك ومعرفتك
                  </p>
                </div>
                <div className="group rounded-xl border border-accent/20 bg-card p-8 shadow-sm transition-all hover:shadow-md hover:border-primary/30">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                  </div>
                  <h3 className="text-xl font-medium mb-2">تجارب قادة الأعمال</h3>
                  <p className="text-sm text-muted-foreground">
                    مقابلات حصرية مع قادة الأعمال وخبراء المجال لمشاركة تجاربهم ورؤاهم
                  </p>
                </div>
                <div className="group rounded-xl border border-accent/20 bg-card p-8 shadow-sm transition-all hover:shadow-md hover:border-primary/30">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                  </div>
                  <h3 className="text-xl font-medium mb-2">أدوات ونماذج عملية</h3>
                  <p className="text-sm text-muted-foreground">
                    موارد قابلة للتحميل لمساعدتك في تطوير مشاريعك وقيادة فريقك نحو النجاح
                  </p>
                </div>
              </div>
            </div>
            
            {/* قسم الأقسام الرئيسية في المجلة */}
            <div className="mt-16 w-full">
              <div className="text-center mb-10">
                <h2 className="text-2xl font-semibold mb-4">الأقسام الرئيسية في المجلة</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  تغطي مجلة شروع مجموعة متنوعة من المواضيع المتخصصة لتلبية احتياجات القادة والمبتكرين في العالم العربي
                </p>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    title: "إدارة المشاريع والقيادة",
                    description: "منهجيات حديثة ومهارات متقدمة في إدارة المشاريع وقيادة الفرق",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                    )
                  },
                  {
                    title: "التحول والتغيير",
                    description: "استراتيجيات التحول الرقمي وإدارة التغيير في المؤسسات",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    )
                  },
                  {
                    title: "الابتكار والتقنية",
                    description: "أحدث الاتجاهات والابتكارات التقنية وتأثيرها على الأعمال",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    )
                  },
                  {
                    title: "دراسات حالة",
                    description: "تحليل معمق لقصص النجاح والدروس المستفادة من التجارب الواقعية",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                    )
                  }
                ].map((category, index) => (
                  <div key={index} className="flex flex-col p-6 rounded-lg border border-accent/20 bg-card hover:border-primary/30 hover:shadow-md transition-all">
                    <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center mb-4 text-primary">
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-medium mb-2">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* الفوتر */}
      <Footer />
    </div>
  )
}