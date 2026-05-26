import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

import { fadeIn } from "../../variants";
import { useState } from "react";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [isQrExpanded, setIsQrExpanded] = useState(false);

  const vcardString = `BEGIN:VCARD
VERSION:3.0
N:G;Abhishek;;;
FN:Abhishek G
ORG:Software Engineer
TITLE:Software Engineer
TEL;TYPE=CELL,VOICE:+919844248690
ADR;TYPE=WORK,PREF:;;Bangalore;Karnataka;;India
EMAIL;TYPE=PREF,INTERNET:abhishekabu0155@gmail.com
EMAIL;TYPE=INTERNET:abhishek.g02112001@gmail.com
URL;TYPE=Github:https://github.com/BotJavadoc
URL;TYPE=LinkedIn:https://www.linkedin.com/in/abhishek-g-2001-profile/
END:VCARD`;

  const downloadVCard = async () => {
    let photoBase64 = "";
    try {
      const response = await fetch("/abhishek-profile.jpg");
      const blob = await response.blob();
      photoBase64 = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64data = reader.result.split(",")[1];
          resolve(base64data);
        };
        reader.readAsDataURL(blob);
      });
    } catch (error) {
      console.error("Failed to load contact photo for vCard:", error);
    }

    const photoLine = photoBase64 ? `\nPHOTO;TYPE=JPEG;ENCODING=b:${photoBase64}` : "";

    const vcard = `BEGIN:VCARD
VERSION:3.0
N:G;Abhishek;;;
FN:Abhishek G
ORG:Software Engineer
TITLE:Software Engineer
TEL;TYPE=CELL,VOICE:+919844248690
ADR;TYPE=WORK,PREF:;;Bangalore;Karnataka;;India
EMAIL;TYPE=PREF,INTERNET:abhishekabu0155@gmail.com
EMAIL;TYPE=INTERNET:abhishek.g02112001@gmail.com
URL;TYPE=Github:https://github.com/BotJavadoc
URL;TYPE=LinkedIn:https://www.linkedin.com/in/abhishek-g-2001-profile/${photoLine}
REV:${new Date().toISOString()}
END:VCARD`;

    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "Abhishek_G.vcf";
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
  };

  const downloadPNG = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
N:G;Abhishek;;;
FN:Abhishek G
ORG:Software Engineer
TITLE:Software Engineer
TEL;TYPE=CELL,VOICE:+919844248690
ADR;TYPE=WORK,PREF:;;Bangalore;Karnataka;;India
EMAIL;TYPE=PREF,INTERNET:abhishekabu0155@gmail.com
EMAIL;TYPE=INTERNET:abhishek.g02112001@gmail.com
URL;TYPE=Github:https://github.com/BotJavadoc
URL;TYPE=LinkedIn:https://www.linkedin.com/in/abhishek-g-2001-profile/
END:VCARD`;

    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(vcard)}`;

    const drawCard = (qrImageElement = null, profileImageElement = null) => {
      const canvas = document.createElement("canvas");
      canvas.width = 700;
      canvas.height = 1000;
      const ctx = canvas.getContext("2d");

      // Sleek premium slate dark background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "#111322");
      gradient.addColorStop(1, "#07080f");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Muted ambient desaturated background glow (top-left & bottom-right)
      const glow1 = ctx.createRadialGradient(100, 100, 10, 100, 100, 400);
      glow1.addColorStop(0, "rgba(99, 102, 241, 0.08)");
      glow1.addColorStop(1, "rgba(99, 102, 241, 0)");
      ctx.fillStyle = glow1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const glow2 = ctx.createRadialGradient(600, 900, 10, 600, 900, 400);
      glow2.addColorStop(0, "rgba(99, 102, 241, 0.08)");
      glow2.addColorStop(1, "rgba(99, 102, 241, 0)");
      ctx.fillStyle = glow2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Outer card container
      ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
      ctx.lineWidth = 2;
      ctx.fillStyle = "rgba(255, 255, 255, 0.03)";
      
      const cardX = 50;
      const cardY = 50;
      const cardW = 600;
      const cardH = 900;
      const radius = 32;
      
      ctx.beginPath();
      ctx.moveTo(cardX + radius, cardY);
      ctx.lineTo(cardX + cardW - radius, cardY);
      ctx.quadraticCurveTo(cardX + cardW, cardY, cardX + cardW, cardY + radius);
      ctx.lineTo(cardX + cardW, cardY + cardH - radius);
      ctx.quadraticCurveTo(cardX + cardW, cardY + cardH, cardX + cardW - radius, cardY + cardH);
      ctx.lineTo(cardX + radius, cardY + cardH);
      ctx.quadraticCurveTo(cardX, cardY + cardH, cardX, cardY + cardH - radius);
      ctx.lineTo(cardX, cardY + radius);
      ctx.quadraticCurveTo(cardX, cardY, cardX + radius, cardY);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Emblem Circle (AG)
      const avatarX = 350;
      const avatarY = 170;
      const avatarR = 64;

      ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(avatarX, avatarY, avatarR, 0, Math.PI * 2);
      ctx.stroke();

      if (profileImageElement) {
        // Draw circular cropped profile photo!
        ctx.save();
        ctx.beginPath();
        ctx.arc(avatarX, avatarY, avatarR - 2, 0, Math.PI * 2);
        ctx.clip();
        ctx.drawImage(profileImageElement, avatarX - avatarR, avatarY - avatarR, avatarR * 2, avatarR * 2);
        ctx.restore();
      } else {
        // Sophisticated desaturated metallic gradient fallback
        const avatarGrad = ctx.createLinearGradient(avatarX - avatarR, avatarY - avatarR, avatarX + avatarR, avatarY + avatarR);
        avatarGrad.addColorStop(0, "#23253b");
        avatarGrad.addColorStop(1, "#0d0e1b");
        ctx.fillStyle = avatarGrad;
        ctx.beginPath();
        ctx.arc(avatarX, avatarY, avatarR - 2, 0, Math.PI * 2);
        ctx.fill();

        // Emblem Text "AG"
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 48px sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("AG", avatarX, avatarY + 2);
      }

      // Name "Abhishek G"
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 38px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "alphabetic";
      ctx.fillText("Abhishek G", 350, 280);

      // Designation
      ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
      ctx.font = "semibold 15px sans-serif";
      ctx.fillText("SOFTWARE ENGINEER", 350, 325);

      // Divider
      ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(100, 370);
      ctx.lineTo(600, 370);
      ctx.stroke();

      // Details layout
      ctx.textAlign = "left";
      
      const details = [
        { label: "PHONE", val: "+91 98442 48690" },
        { label: "ADDRESS", val: "Bangalore, India" },
        { label: "E-MAIL", val: "abhishekabu0155@gmail.com" },
        { label: "WEB", val: "github.com/BotJavadoc" }
      ];

      let startY = 410;
      details.forEach((item) => {
        ctx.fillStyle = "rgba(255, 255, 255, 0.35)";
        ctx.font = "bold 13px sans-serif";
        ctx.fillText(item.label, 100, startY);
        
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 23px sans-serif";
        ctx.fillText(item.val, 100, startY + 32);
        
        startY += 82;
      });

      // Divider before QR
      ctx.beginPath();
      ctx.moveTo(100, 740);
      ctx.lineTo(600, 740);
      ctx.stroke();

      const qrSize = 100;
      const qrX = 350 - qrSize / 2;
      const qrY = 785;

      if (qrImageElement) {
        // Draw real QR Code image background (for better scanning contrast)
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(qrX - 8, qrY - 8, qrSize + 16, qrSize + 16);
        ctx.drawImage(qrImageElement, qrX, qrY, qrSize, qrSize);
      } else {
        // Draw mock QR code fallback
        ctx.fillStyle = "rgba(255, 255, 255, 0.02)";
        ctx.fillRect(qrX - 16, qrY - 16, qrSize + 32, qrSize + 32);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.06)";
        ctx.strokeRect(qrX - 16, qrY - 16, qrSize + 32, qrSize + 32);

        ctx.fillStyle = "#ffffff";
        
        // Top-Left Finder
        ctx.fillRect(qrX, qrY, 26, 26);
        ctx.fillStyle = "rgba(0, 0, 0, 0.9)";
        ctx.fillRect(qrX + 4, qrY + 4, 18, 18);
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(qrX + 8, qrY + 8, 10, 10);

        // Top-Right Finder
        ctx.fillRect(qrX + qrSize - 26, qrY, 26, 26);
        ctx.fillStyle = "rgba(0, 0, 0, 0.9)";
        ctx.fillRect(qrX + qrSize - 22, qrY + 4, 18, 18);
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(qrX + qrSize - 18, qrY + 8, 10, 10);

        // Bottom-Left Finder
        ctx.fillRect(qrX, qrY + qrSize - 26, 26, 26);
        ctx.fillStyle = "rgba(0, 0, 0, 0.9)";
        ctx.fillRect(qrX + 4, qrY + qrSize - 22, 18, 18);
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(qrX + 8, qrY + qrSize - 18, 10, 10);

        // Simulated QR dots
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.fillRect(qrX + 34, qrY, 6, 6);
        ctx.fillRect(qrX + 46, qrY + 6, 12, 6);
        ctx.fillRect(qrX + 34, qrY + 18, 6, 12);
        ctx.fillRect(qrX + 52, qrY + 24, 6, 6);
        ctx.fillRect(qrX + 64, qrY + 12, 6, 18);
        ctx.fillRect(qrX + 34, qrY + 34, 12, 6);
        ctx.fillRect(qrX + 52, qrY + 46, 6, 12);
        ctx.fillRect(qrX, qrY + 46, 6, 6);
        ctx.fillRect(qrX + 12, qrY + 52, 12, 6);
        ctx.fillRect(qrX + 18, qrY + 34, 6, 6);
        ctx.fillRect(qrX + qrSize - 26, qrY + 34, 6, 12);
        ctx.fillRect(qrX + qrSize - 14, qrY + 46, 12, 6);
        ctx.fillRect(qrX + qrSize - 38, qrY + 58, 6, 6);
        ctx.fillRect(qrX + qrSize - 26, qrY + 64, 18, 6);
        ctx.fillRect(qrX + 34, qrY + qrSize - 26, 6, 18);
        ctx.fillRect(qrX + 46, qrY + qrSize - 14, 18, 6);
        ctx.fillRect(qrX + 34, qrY + qrSize - 6, 12, 6);
        ctx.fillRect(qrX + 52, qrY + qrSize - 38, 6, 6);
        ctx.fillRect(qrX + 64, qrY + qrSize - 26, 6, 12);
      }

      // Caption
      ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
      ctx.font = "bold 11px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(qrImageElement ? "SCAN TO SAVE CONTACT" : "SCAN TO CONNECT", 350, 936);

      const imageLink = document.createElement("a");
      imageLink.download = "Abhishek_G_Contact_Card.png";
      imageLink.href = canvas.toDataURL("image/png");
      imageLink.click();
    };

    const loadImg = (src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => resolve(img);
        img.onerror = () => resolve(null);
        img.src = src;
      });
    };

    // Load QR and Profile Picture concurrently
    let fallbackTriggered = false;
    const fallbackTimer = setTimeout(() => {
      if (!fallbackTriggered) {
        fallbackTriggered = true;
        drawCard(null, null);
      }
    }, 2800);

    Promise.all([
      loadImg(qrUrl),
      loadImg("/abhishek-profile.jpg")
    ]).then(([qrImgElement, profileImgElement]) => {
      clearTimeout(fallbackTimer);
      if (!fallbackTriggered) {
        fallbackTriggered = true;
        drawCard(qrImgElement, profileImgElement);
      }
    }).catch(() => {
      clearTimeout(fallbackTimer);
      if (!fallbackTriggered) {
        fallbackTriggered = true;
        drawCard(null, null);
      }
    });
  };

  const handleEmailRedirect = (name, email, subject, message) => {
    const userEmail = email ? email.trim().toLowerCase() : "";
    const bodyText = `Hi Abhishek,\n\nYou have received a new message from your portfolio website.\n\nSender Name: ${name}\nSender Email: ${email}\n\nMessage:\n${message}\n\n`;
    const emailSubject = subject && subject.trim() ? subject.trim() : "I wanna connect with you";
    const primaryTo = "abhishekabu0155@gmail.com";
    const backupTo = "abhishek.g02112001@gmail.com";

    if (userEmail.endsWith("@gmail.com")) {
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${primaryTo}&cc=${backupTo}&su=${encodeURIComponent(
        emailSubject
      )}&body=${encodeURIComponent(bodyText)}`;
      window.open(gmailUrl, "_blank");
    } else if (
      userEmail.endsWith("@outlook.com") ||
      userEmail.endsWith("@hotmail.com") ||
      userEmail.endsWith("@live.com") ||
      userEmail.endsWith("@live.co.in") ||
      userEmail.endsWith("@outlook.in")
    ) {
      const outlookUrl = `https://outlook.live.com/default.aspx?rru=compose&to=${primaryTo}&subject=${encodeURIComponent(
        emailSubject
      )}&body=${encodeURIComponent(bodyText)}`;
      window.open(outlookUrl, "_blank");
    } else if (
      userEmail.endsWith("@yahoo.com") ||
      userEmail.endsWith("@yahoo.co.in") ||
      userEmail.endsWith("@ymail.com")
    ) {
      const yahooUrl = `https://compose.mail.yahoo.com/?to=${primaryTo}&subj=${encodeURIComponent(
        emailSubject
      )}&body=${encodeURIComponent(bodyText)}`;
      window.open(yahooUrl, "_blank");
    } else {
      const mailtoUrl = `mailto:${primaryTo},${backupTo}?subject=${encodeURIComponent(
        emailSubject
      )}&body=${encodeURIComponent(bodyText)}`;
      window.location.href = mailtoUrl;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const myForm = event.target;
    const formData = new FormData(myForm);
    const name = formData.get("name") || "";
    const email = formData.get("email") || "";
    const subject = formData.get("subject") || "";
    const message = formData.get("message") || "";

    fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then((res) => {
        handleEmailRedirect(name, email, subject, message);

        if (res.status === 200) {
          alert("Thank you. Opening your email app to send the message...");
        } else {
          console.log(res);
        }
      })
      .catch((error) => {
        console.log(error);
        handleEmailRedirect(name, email, subject, message);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <div className="h-full bg-primary/30">
      <div className="container mx-auto pt-24 pb-12 xl:py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let{"'"}s <span className="text-accent">connect.</span>
          </motion.h2>

          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
            autoComplete="off"
            autoCapitalize="off"
            name="contact"
          >
            {/* input group */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-x-6 w-full">
              <input type="hidden" name="form-name" value="contact" />

              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="input"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input"
              disabled={isLoading}
              aria-disabled={isLoading}
              required
              aria-required
            />
            <textarea
              name="message"
              placeholder="Message..."
              className="textarea"
              disabled={isLoading}
              aria-disabled={isLoading}
              required
              aria-required
            />
            <div className="flex flex-col sm:flex-row gap-4 items-center w-full mt-2">
              <button
                type="submit"
                className="btn rounded-full border border-white/50 w-full sm:w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
                disabled={isLoading}
                aria-disabled={isLoading}
              >
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  Let{"'"}s talk
                </span>

                <BsArrowRight
                  className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                  aria-hidden
                />
              </button>

              <button
                type="button"
                onClick={() => setIsCardOpen(true)}
                className="btn rounded-full border border-accent bg-accent/10 w-full sm:w-auto px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:bg-accent hover:text-white text-accent font-medium group"
              >
                <span>View Contact Card</span>
              </button>

              <a
                href="/resume/Abhishek_Resume.pdf"
                download="Abhishek_G_Resume.pdf"
                className="btn rounded-full border border-white/30 bg-white/5 w-full sm:w-auto px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent hover:bg-accent text-white font-medium group cursor-pointer z-10"
              >
                <span>Download Resume</span>
              </a>
            </div>
          </motion.form>
        </div>
      </div>
    </div>

    {/* Contact Card Modal Overlay */}
    {isCardOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-opacity duration-300 animate-fade-in overflow-y-auto">
        <div className="bg-[#0b0c16] border border-white/5 w-full max-w-[390px] rounded-3xl p-5 md:p-6 shadow-2xl relative flex flex-col items-center max-h-[92vh] overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
          <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#6366f1]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-36 h-36 bg-[#4f46e5]/10 rounded-full blur-3xl pointer-events-none" />

          <button
            onClick={() => setIsCardOpen(false)}
            className="absolute top-4 right-4 text-white/30 hover:text-white transition-all duration-300 text-3xl z-10"
            aria-label="Close modal"
          >
            &times;
          </button>

          <div className="w-full bg-white/2 backdrop-blur-xl border border-white/5 rounded-2xl p-5 flex flex-col items-center relative shadow-inner mb-5">
            {/* Elegant Profile Avatar */}
            <div className="w-18 h-18 rounded-full shadow-xl mb-3 border border-white/10 overflow-hidden relative select-none pointer-events-none flex items-center justify-center bg-[#1c1d30]">
              <img 
                src="/abhishek-profile.jpg" 
                alt="Abhishek G" 
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-white text-xl font-bold tracking-tight mb-0.5">
              Abhishek G
            </h3>
            <p className="text-white/50 text-[10px] font-semibold uppercase tracking-[0.2em] mb-4">
              Software Engineer
            </p>

            <div className="w-full h-[1px] bg-white/5 mb-4" />

            <div className="w-full space-y-3.5 text-left text-xs md:text-sm">
              <div>
                <span className="text-white/35 text-[9px] font-bold block uppercase tracking-wider mb-0.5">Phone</span>
                <span className="text-white font-medium">+91 98442 48690</span>
              </div>
              <div>
                <span className="text-white/35 text-[9px] font-bold block uppercase tracking-wider mb-0.5">Address</span>
                <span className="text-white font-medium">Bangalore, India</span>
              </div>
              <div>
                <span className="text-white/35 text-[9px] font-bold block uppercase tracking-wider mb-0.5">E-mail</span>
                <span className="text-white font-medium break-all">abhishekabu0155@gmail.com</span>
              </div>
              <div>
                <span className="text-white/35 text-[9px] font-bold block uppercase tracking-wider mb-0.5">Web</span>
                <span className="text-white font-medium">github.com/BotJavadoc</span>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-white/5 my-4" />

            {/* Premium Matching Real QR code at the bottom (Hover zoom & Click expand) */}
            <div 
              onClick={() => setIsQrExpanded(true)}
              className="flex flex-col items-center gap-1 mt-1 bg-white/2 border border-white/5 p-2 rounded-xl shadow-inner w-[120px] cursor-zoom-in hover:scale-105 hover:bg-white/5 hover:border-accent/40 active:scale-95 transition-all duration-300 group z-20"
              title="Click to zoom/expand QR Code"
            >
              <div className="w-[84px] h-[84px] bg-white rounded-md p-1 shadow-md flex items-center justify-center select-none pointer-events-none group-hover:shadow-accent/10 transition-shadow">
                <img 
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(vcardString)}`} 
                  alt="Contact QR Code" 
                  className="w-19 h-19 object-contain"
                />
              </div>
              <span className="text-[7.5px] text-white/30 tracking-wider font-mono group-hover:text-accent transition-colors">SCAN TO SAVE CONTACT</span>
            </div>
          </div>

          <div className="w-full flex flex-col gap-3">
            <button
              onClick={downloadPNG}
              className="w-full bg-accent hover:bg-accent-hover text-white py-3 rounded-full font-medium transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-accent/40 text-sm flex items-center justify-center gap-2"
            >
              <span>Download PNG Image</span>
            </button>
            <button
              onClick={downloadVCard}
              className="w-full bg-white/10 hover:bg-white/20 text-white py-3 rounded-full font-medium transition-all duration-300 text-sm border border-white/10 flex items-center justify-center gap-2"
            >
              <span>Save to Contacts (vCard)</span>
            </button>
            <button
              onClick={() => setIsCardOpen(false)}
              className="w-full bg-transparent hover:text-accent text-white/60 py-2 rounded-full text-xs transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    )}

    {/* Expanded QR Code View Overlay (Hover zoom & Click backdrop/button to close) */}
    {isQrExpanded && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg transition-opacity duration-300 animate-fade-in">
        {/* Backdrop Click to close */}
        <div className="absolute inset-0 cursor-zoom-out" onClick={() => setIsQrExpanded(false)} />
        
        {/* Expanded Card Container */}
        <div className="bg-[#0b0c16]/95 border border-white/10 p-6 md:p-8 rounded-3xl shadow-2xl relative flex flex-col items-center max-w-[320px] w-full z-10 pointer-events-auto animate-scale-in">
          {/* Close Button */}
          <button
            onClick={() => setIsQrExpanded(false)}
            className="absolute top-4 right-4 text-white/40 hover:text-accent transition-all duration-300 text-3xl font-bold"
            aria-label="Close expanded view"
          >
            &times;
          </button>

          {/* QR Card Frame */}
          <div className="w-[200px] h-[200px] bg-white rounded-2xl p-3.5 shadow-2xl flex items-center justify-center mb-4 select-none">
            <img 
              src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(vcardString)}`} 
              alt="Contact QR Code Expanded" 
              className="w-full h-full object-contain"
            />
          </div>

          <h4 className="text-white text-base font-bold tracking-tight mb-1">
            Abhishek G
          </h4>
          <p className="text-accent text-[11px] font-semibold uppercase tracking-[0.2em] mb-4">
            Save Contact QR
          </p>
          
          <button
            onClick={() => setIsQrExpanded(false)}
            className="px-6 py-2 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 active:scale-95"
          >
            Close View
          </button>
        </div>
      </div>
    )}
    </>
  );
};

export default Contact;
