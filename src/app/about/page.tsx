"use client";

import React from "react";
import Image from "next/image";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-muted/30">
      <Header />

      <main className="container mx-auto max-w-6xl flex flex-1 flex-col py-12 md:py-20">
        {/* قسم المقدمة */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-6 md:text-5xl">عن مجلة شروع</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              مجلة شروع هي منصة رقمية متخصصة تهدف إلى إثراء المحتوى العربي في
              مجالات إدارة المشاريع، القيادة، التحول الرقمي، والابتكار، من خلال
              محتوى احترافي مدعوم بدراسات حالة وأبحاث متعمقة.
            </p>
          </div>
        </div>

        {/* قسم الرؤية والرسالة */}
        <div className="grid gap-8 md:grid-cols-2 mb-16">
          <div className="bg-card border border-accent/20 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all">
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-7 w-7"
              >
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-4">رؤيتنا</h2>
            <p className="text-muted-foreground leading-relaxed">
              أن نكون المصدر الرئيسي للمعرفة والإلهام في مجالات إدارة المشاريع
              والقيادة والابتكار في العالم العربي، من خلال تقديم محتوى عالي
              الجودة يساهم في تطوير المهنيين وتعزيز نجاح المؤسسات.
            </p>
          </div>

          <div className="bg-card border border-accent/20 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all">
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-7 w-7"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-4">رسالتنا</h2>
            <p className="text-muted-foreground leading-relaxed">
              تقديم محتوى عربي متخصص عالي الجودة يجمع بين المعرفة النظرية
              والتطبيقات العملية، لمساعدة القادة والمهنيين على مواكبة أحدث
              التطورات وتبني أفضل الممارسات في مجالاتهم.
            </p>
          </div>
        </div>

        {/* قسم قيمنا */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">قيمنا</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "الجودة والمصداقية",
                description:
                  "نلتزم بتقديم محتوى دقيق وموثوق به، مدعوم بالأبحاث والمصادر الموثوقة.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
                  </svg>
                ),
              },
              {
                title: "الابتكار والتطوير",
                description:
                  "نسعى دائمًا للتجديد وتطوير المحتوى والأدوات لتلبية احتياجات القراء المتغيرة.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m7 10 2.5-2.5"></path>
                    <path d="m16.5 9.5 2 2"></path>
                    <path d="m4.5 13.5 3 2.5"></path>
                    <path d="m14.5 17 2-3"></path>
                    <path d="M12 6v2"></path>
                    <path d="M12 16v2"></path>
                    <path d="M9 12H7"></path>
                    <path d="M17 12h-2"></path>
                    <path d="m11 7-3 3"></path>
                    <path d="m13 7 3 3"></path>
                    <path d="m11 17 3-3"></path>
                    <path d="m13 17-3-3"></path>
                  </svg>
                ),
              },
              {
                title: "التأثير والفائدة",
                description:
                  "نركز على تقديم محتوى عملي وقابل للتطبيق يحدث فرقًا حقيقيًا في الأداء المهني.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z"></path>
                    <line x1="16" y1="8" x2="2" y2="22"></line>
                    <line x1="17.5" y1="15" x2="9" y2="15"></line>
                  </svg>
                ),
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-card border border-accent/20 rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  {value.icon}
                </div>
                <h3 className="text-xl font-medium mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* قسم التواصل */}
        <div className="bg-card border border-accent/20 rounded-2xl p-8 shadow-md text-center">
          <h2 className="text-2xl font-bold mb-4">تواصل معنا</h2>
          <p className="text-muted-foreground mb-6">
            نحن نرحب دائمًا بأسئلتكم واقتراحاتكم وملاحظاتكم. لا تترددوا في
            التواصل معنا.
          </p>
          <div className="flex justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              <span>تواصل معنا</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-5 w-5"
              >
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
