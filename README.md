# 🎬 YouTube Video Downloader (React + FastAPI + yt-dlp)

Bu proje, kullanıcıların YouTube videolarını (özellikle **Shorts dahil**) hızlıca indirmelerini sağlayan bir uygulamadır.  
Frontend kısmı **React + TypeScript**, backend kısmı ise **Python + FastAPI** ve **yt-dlp** ile geliştirilmiştir.

---

## 🚀 Özellikler

- 🎞️ YouTube videolarını ve Shorts linklerini destekler  
- 💾 En yüksek çözünürlükte video indirir  
- ⚙️ React frontend ile hızlı kullanıcı arayüzü  
- ⚡ FastAPI backend ile yüksek performanslı API  
- 📁 İndirilen videolar `downloads/` klasörüne kaydedilir

---

## 🧱 Proje Yapısı

\`\`\`
youtube-downloader/
│
├── backend/
│   ├── main.py          # FastAPI backend
│   ├── venv/            # Python sanal ortam
│   └── downloads/       # İndirilen videolar
│
├── frontend/
│   ├── src/
│   │   └── App.tsx      # React ana bileşeni
│   └── package.json     # React bağımlılıkları
│
└── README.md            # Bu dosya
\`\`\`

---

## 🔧 Kurulum Talimatları

### 1. Backend (FastAPI)

\`\`\`bash
cd backend
python -m venv venv
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

pip install -r requirements.txt
# Veya manuel:
pip install fastapi uvicorn yt-dlp

uvicorn main:app --reload
\`\`\`

### 2. Frontend (React)

\`\`\`bash
cd frontend
npm install
npm run dev
\`\`\`

> React varsayılan olarak `http://localhost:3000`'da, FastAPI ise `http://localhost:8000`'da çalışır.

---

## 🧪 Kullanım

1. React arayüzünde YouTube video URL’sini girin (örn: `https://www.youtube.com/watch?v=abc123`)
2. `İndir` butonuna tıklayın
3. Video `backend/downloads/` klasörüne iner
4. Başarı mesajı ekranınızda gösterilir

---

## 📌 Notlar

- `pytube` yerine `yt-dlp` kullanıldı çünkü daha stabil ve YouTube Shorts videolarıyla uyumlu
- `yt-dlp` sisteminizde global olarak kurulu değilse, sanal ortama kurulmuş olması yeterlidir
- Gelişmiş özellikler (ses indirme, kalite seçimi vs.) kolayca eklenebilir

---

## 📄 Lisans

MIT License  
Projeyi dilediğiniz gibi kullanabilir ve geliştirebilirsiniz 🎉

---

## ✨ Katkı

Pull Request'ler ve yıldızlamalar (⭐) memnuniyetle karşılanır!
