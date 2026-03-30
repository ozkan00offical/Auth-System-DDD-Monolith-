# 🎓 School Club Management System

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Modern web teknolojileri ile geliştirilmiş bir **Oturum Yönetimi Özeeliğine Sahip Monolitich Domain Draven Desing Mimari Örneği**.  

---

## 🏗️ Genel Yazılım Mimarisi ve Teknoloji Yığını

**Frontend:**  
Next.js (App Router), TypeScript, Tailwind CSS, React

**Backend:**  
Node.js, Express.js, Prisma ORM

**Veritabanı:**  
MySQL (Prisma üzerinden yönetilir)

**Güvenlik:**  
- Password Hashing (Argon2)  
- JWT(jose)
- CORS & CSRF
- Memory bazlı rate limiter

---

## ⚙️ Kurulum ve Gereksinimler

### 1️⃣ Ortam Değişkenleri (.env)

Kök dizinde `.env` dosyası oluşturun ve aşağıdaki değişkenleri tanımlayın:

PORT =  

DATABASE_URL =  

JWT_SECRET =  

DATABASE_USER =  
DATABASE_PASSWORD =  
DATABASE_NAME =  
DATABASE_HOST =  
DATABASE_PORT =  

NODE_ENV =  


### 2️⃣ Yerel Çalıştırma

# Bağımlılıkları yükleyin  
npm install  

# Veritabanı şemasını oluşturun  
npx prisma generate  
npx prisma db push  

# Geliştirme modunda başlatın  
npm run dev  

### 3️⃣ Docker ile Çalıştırma

docker-compose up -d  

---

## 🛡️ Lisans

Bu proje MIT Lisansı altında lisanslanmıştır.  
Bu, projenin ticari veya kişisel amaçlarla özgürce kullanılabileceği, kopyalanabileceği ve değiştirilebileceği anlamına gelir; ancak orijinal yazarın belirtilmesi zorunludur.

---

## ⚠️ Önemli Not / Sorumluluk Reddi

Bu proje sadece teknik bir araç olarak geliştirilmiştir.  
Projeyi kullanırken meydana gelebilecek hatalı, kötü niyetli veya yasadışı kullanımlardan projenin orijinal yazarı/geliştiricisi sorumlu tutulamaz.  
Kullanıcılar, projeyi kendi sorumlulukları altında kullanmayı kabul etmiş sayılır.

---

## 📧 İletişim

Geliştirici: Ramazan Özkan  
E-posta: officallozkan@gmail.com  
GitHub: [@ozkan00offical](https://github.com/ozkan00offical)
