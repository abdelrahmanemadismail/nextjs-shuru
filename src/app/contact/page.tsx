"use client"

import type React from "react"
import { useState } from "react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Mail, 
  MapPin, 
  Phone,
  Send,
  CheckCircle
} from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // محاكاة إرسال النموذج
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      })
      
      // إعادة تعيين حالة الإرسال بعد فترة
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-muted/30">
      <Header />

      <main className="container mx-auto max-w-6xl flex flex-1 flex-col py-12 md:py-20">
        {/* عنوان الصفحة */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-6 md:text-5xl">تواصل معنا</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نرحب بأسئلتكم واقتراحاتكم وملاحظاتكم. يسعدنا التواصل معكم والرد على استفساراتكم.
          </p>
        </div>

        {/* قسم معلومات الاتصال ونموذج الاتصال */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {/* معلومات الاتصال */}
          <div className="flex flex-col justify-center">
            <div className="bg-card border border-accent/20 rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-semibold mb-6">وسائل التواصل</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">البريد الإلكتروني</h3>
                    <p className="text-muted-foreground">info@shurumagazine.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">رقم الهاتف</h3>
                    <p className="text-muted-foreground">+966 12 345 6789</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">العنوان</h3>
                    <p className="text-muted-foreground">الرياض، المملكة العربية السعودية</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-accent/10">
                <h3 className="font-medium mb-4">تابعنا على</h3>
                <div className="flex gap-4">
                  <a href="#" className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  </a>
                  <a href="#" className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                  <a href="#" className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                  <a href="#" className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* نموذج الاتصال */}
          <div>
            <div className="bg-card border border-accent/20 rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-semibold mb-6">أرسل رسالة</h2>
              
              {submitted ? (
                <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl text-center">
                  <div className="flex justify-center mb-4">
                    <CheckCircle className="h-16 w-16 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-medium text-green-800 dark:text-green-300 mb-2">
                    تم إرسال رسالتك بنجاح!
                  </h3>
                  <p className="text-green-700 dark:text-green-400">
                    شكراً للتواصل معنا. سنقوم بالرد عليك في أقرب وقت ممكن.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        الاسم الكامل
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="أدخل اسمك الكامل"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-11 bg-background border-accent/20 focus-visible:ring-primary/40"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        البريد الإلكتروني
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="أدخل بريدك الإلكتروني"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-11 bg-background border-accent/20 focus-visible:ring-primary/40"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      الموضوع
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="موضوع الرسالة"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="h-11 bg-background border-accent/20 focus-visible:ring-primary/40"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      الرسالة
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="اكتب رسالتك هنا..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="min-h-32 bg-background border-accent/20 focus-visible:ring-primary/40"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full h-12 bg-primary hover:bg-primary/90"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        جاري الإرسال...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <span>إرسال الرسالة</span>
                        <Send size={16} />
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* قسم الأسئلة الشائعة */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">الأسئلة الشائعة</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: "كيف يمكنني الاشتراك في النشرة البريدية؟",
                answer: "يمكنك الاشتراك في النشرة البريدية من خلال ملء النموذج الموجود في الصفحة الرئيسية للموقع، وستصلك رسالة تأكيد على بريدك الإلكتروني."
              },
              {
                question: "هل يمكنني المساهمة بمقالات في المجلة؟",
                answer: "نعم، نرحب بالمساهمات من الخبراء والمتخصصين. يرجى التواصل معنا عبر البريد الإلكتروني مع إرفاق نموذج من كتاباتك السابقة."
              },
              {
                question: "متى سيتم إطلاق الموقع رسمياً؟",
                answer: "من المقرر إطلاق منصة مجلة شروع في يونيو 2025. يمكنك الاشتراك في النشرة البريدية للحصول على إشعار فوري عند الإطلاق."
              },
              {
                question: "هل تقدمون محتوى تدريبي وورش عمل؟",
                answer: "نعم، سنقدم ورش عمل افتراضية وموارد تدريبية متخصصة للمشتركين في المجلة، تغطي مختلف مجالات إدارة المشاريع والقيادة والابتكار."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-card border border-accent/20 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                <h3 className="text-xl font-medium mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}