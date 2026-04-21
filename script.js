<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PNK - Gateway System</title>
    
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

    <style>
        :root {
            --primary: #00f2ff;
            --secondary: #0062ff;
            --dark: #050505;
            --card-bg: rgba(20, 20, 20, 0.9);
        }

        body {
            margin: 0;
            font-family: 'Courier New', Courier, monospace;
            background-color: var(--dark);
            color: white;
            overflow-x: hidden;
        }

        .hidden { display: none !important; }

        /* Background Glow */
        .bg-glow {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 300px;
            height: 300px;
            background: var(--secondary);
            filter: blur(150px);
            z-index: -1;
            opacity: 0.3;
        }

        section {
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }

        /* Tombol & Input */
        .btn {
            background: linear-gradient(90deg, var(--secondary), var(--primary));
            border: none;
            padding: 15px 30px;
            color: white;
            font-weight: bold;
            border-radius: 5px;
            cursor: pointer;
            text-transform: uppercase;
            box-shadow: 0 0 15px var(--secondary);
            margin-top: 20px;
        }

        input, select, textarea {
            width: 100%;
            max-width: 300px;
            background: rgba(255,255,255,0.1);
            border: 1px solid var(--primary);
            padding: 12px;
            margin: 8px 0;
            color: white;
            border-radius: 4px;
        }

        /* Kartu Intro PNK */
        .id-card {
            background: var(--card-bg);
            border: 2px solid var(--primary);
            width: 320px;
            padding: 25px;
            border-radius: 15px;
            position: relative;
            box-shadow: 0 0 30px rgba(0, 242, 255, 0.2);
            background-image: linear-gradient(rgba(0, 242, 255, 0.05) 1px, transparent 1px), 
                              linear-gradient(90deg, rgba(0, 242, 255, 0.05) 1px, transparent 1px);
            background-size: 20px 20px;
        }

        .card-header { border-bottom: 2px solid var(--primary); margin-bottom: 15px; }
        .card-header h2 { margin: 0; color: var(--primary); font-size: 1.2rem; }
        .data-row { margin: 10px 0; font-size: 0.9rem; }
        .label { color: #888; font-size: 0.7rem; display: block; }
        
        .security-badge {
            margin-top: 15px;
            font-size: 0.7rem;
            color: #00ff88;
            text-align: center;
            border: 1px dashed #00ff88;
            padding: 5px;
        }

        .loading-text { font-size: 0.8rem; color: var(--primary); margin-top: 15px; }
    </style>
</head>
<body>

    <div class="bg-glow"></div>
    <audio id="clickSound" src="https://www.soundjay.com/buttons/sounds/button-16.mp3"></audio>

    <section id="p1">
        <h1 data-aos="zoom-in">PNK SYSTEM</h1>
        <p data-aos="fade-up" data-aos-delay="300">Perlindungan Nusantara Komunitas</p>
        <button class="btn" onclick="go(1, 2)">Initialize Identity</button>
    </section>

    <section id="p2" class="hidden">
        <div class="form-box" data-aos="fade-right">
            <h3>Identity Input</h3>
            <input type="text" id="nama" placeholder="Nama Lengkap">
            <input type="number" id="umur" placeholder="Umur">
            <input type="text" id="tiktok" placeholder="TikTok @username">
            <select id="gender">
                <option value="Laki-laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
            </select>
            <textarea id="alasan" placeholder="Alasan Bergabung"></textarea>
            <button class="btn" onclick="processAI()">Verify & Generate</button>
        </div>
    </section>

    <section id="p3" class="hidden">
        <div id="captureArea" class="id-card">
            <div class="card-header">
                <h2>PNK MEMBER CARD</h2>
                <small>Secure Database Access</small>
            </div>
            <div class="data-row">
                <span class="label">FULL NAME</span>
                <span id="resNama">SATRIA</span>
            </div>
            <div class="data-row">
                <span class="label">TIKTOK ACCOUNT</span>
                <span id="resTikTok">@satria_pnk</span>
            </div>
            <div class="data-row">
                <span class="label">STATUS</span>
                <span id="resGender">ACTIVE</span>
            </div>
            <div class="security-badge">
                SHIELD ENCRYPTION: ACTIVE 🛡️
            </div>
        </div>
        
        <button class="btn" style="background: #333;" onclick="downloadJPG()">Download Card</button>
        <p class="loading-text" id="timerText">Sistem AI mengalihkan ke WhatsApp dalam 5...</p>
    </section>

    <script>
        AOS.init();
        const snd = document.getElementById('clickSound');

        function go(from, to) {
            snd.play();
            document.getElementById('p' + from).classList.add('hidden');
            document.getElementById('p' + to).classList.remove('hidden');
        }

        function processAI() {
            snd.play();
            // Ambil Data
            const n = document.getElementById('nama').value;
            const t = document.getElementById('tiktok').value;
            const g = document.getElementById('gender').value;

            if(!n || !t) return alert("Data harus diisi!");

            // Masukkan ke Kartu
            document.getElementById('resNama').innerText = n.toUpperCase();
            document.getElementById('resTikTok').innerText = t;
            document.getElementById('resGender').innerText = g.toUpperCase();

            go(2, 3);

            // Fitur Auto Redirect
            let count = 5;
            const timer = setInterval(() => {
                count--;
                document.getElementById('timerText').innerText = `Sistem AI mengalihkan ke WhatsApp dalam ${count}...`;
                if(count <= 0) {
                    clearInterval(timer);
                    window.location.href = "https://chat.whatsapp.com/KJQGOzP9OazAF3MbyUFx65?mode=gi_t";
                }
            }, 1000);
        }

        function downloadJPG() {
            const area = document.getElementById('captureArea');
            html2canvas(area).then(canvas => {
                const link = document.createElement('a');
                link.download = 'PNK_Identity.png';
                link.href = canvas.toDataURL();
                link.click();
            });
        }
    </script>
</body>
</html>
  
