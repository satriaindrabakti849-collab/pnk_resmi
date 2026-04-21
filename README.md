<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PNK - Perlindungan Nusantara Komunitas</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

        :root {
            --bg-color: #0d0a1a;
            --card-bg: #16122b;
            --accent-purple: #8a2be2;
            --accent-blue: #007bff;
            --text-gray: #b0b0b0;
            --gold: #ffd700;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
            font-family: 'Poppins', sans-serif;
            background-color: var(--bg-color);
            background-image: radial-gradient(circle at top right, #1e1540, transparent),
                              radial-gradient(circle at bottom left, #0d0a1a, transparent);
            color: #ffffff;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
        }

        .container {
            background: var(--card-bg);
            width: 100%;
            max-width: 450px;
            padding: 35px;
            border-radius: 25px;
            border: 1px solid rgba(255, 255, 255, 0.05);
            box-shadow: 0 20px 40px rgba(0,0,0,0.6);
            text-align: center;
        }

        h1 {
            font-size: 1.8rem;
            background: linear-gradient(to right, #a18cd1, #fbc2eb);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 5px;
        }

        .desc {
            font-size: 0.85rem;
            color: var(--text-gray);
            margin-bottom: 30px;
            line-height: 1.5;
        }

        .ai-badge {
            background: rgba(138, 43, 226, 0.15);
            border: 1px solid var(--accent-purple);
            color: #e0b0ff;
            font-size: 0.65rem;
            padding: 6px 12px;
            border-radius: 50px;
            display: inline-block;
            margin-bottom: 20px;
            font-weight: bold;
            letter-spacing: 1px;
        }

        .form-group { text-align: left; margin-bottom: 15px; }

        label {
            font-size: 0.8rem;
            margin-left: 5px;
            margin-bottom: 8px;
            display: block;
            color: #efefef;
        }

        input, select, textarea {
            width: 100%;
            padding: 14px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            color: #fff;
            outline: none;
            transition: 0.3s;
        }

        input:focus, textarea:focus {
            border-color: var(--accent-purple);
            background: rgba(255, 255, 255, 0.08);
        }

        .row { display: flex; gap: 10px; }
        .row .form-group { flex: 1; }

        .btn-main {
            width: 100%;
            padding: 16px;
            border-radius: 15px;
            border: none;
            background: linear-gradient(45deg, var(--accent-blue), #6a11cb);
            color: white;
            font-weight: 600;
            font-size: 1rem;
            cursor: pointer;
            transition: transform 0.2s, box-shadow 0.2s;
            margin-top: 10px;
        }

        .btn-main:active { transform: scale(0.98); }

        .hidden { display: none; }

        /* Animasi Transisi */
        .fade-in {
            animation: fadeIn 0.6s ease forwards;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>
</head>
<body>

    <audio id="clickSound" src="https://www.soundjay.com/buttons/sounds/button-3.mp3" preload="auto"></audio>

    <div id="page1" class="container fade-in">
        <div class="ai-badge">SECURED BY PNK AI SYSTEM</div>
        <h1>PNK Nusantara</h1>
        <p class="desc">Perlindungan Nusantara Komunitas. Pastikan data Anda terlindungi dengan sistem keamanan enkripsi tingkat tinggi.</p>
        <button class="btn-main" onclick="nav(2)">LANJUTKAN</button>
    </div>

    <div id="page2" class="container hidden">
        <h2 style="margin-bottom: 5px;">Biodata Anggota PNK</h2>
        <p class="desc">Lengkapi data Anda untuk bergabung ke grup</p>
        
        <div class="form-group">
            <label>Nama Lengkap</label>
            <input type="text" id="nama" placeholder="Masukkan nama...">
        </div>

        <div class="row">
            <div class="form-group">
                <label>Umur</label>
                <input type="number" id="umur" placeholder="16">
            </div>
            <div class="form-group">
                <label>Tanggal Lahir</label>
                <input type="date" id="tgl">
            </div>
        </div>

        <div class="row">
            <div class="form-group">
                <label>Jenis Kelamin</label>
                <select id="jk">
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                </select>
            </div>
            <div class="form-group">
                <label>Akun TikTok</label>
                <input type="text" id="tiktok" placeholder="@username">
            </div>
        </div>

        <div class="form-group">
            <label>Asal Daerah</label>
            <input type="text" id="asal" placeholder="Provinsi / Kota">
        </div>

        <div class="form-group">
            <label>Alasan Bergabung</label>
            <textarea id="alasan" rows="2" placeholder="Tulis alasan Anda..."></textarea>
        </div>

        <button class="btn-main" onclick="finish()">VERIFIKASI & GABUNG</button>
    </div>

    <script>
        const snd = document.getElementById('clickSound');

        function play() {
            snd.currentTime = 0;
            snd.play();
        }

        function nav(n) {
            play();
            document.getElementById('page1').classList.add('hidden');
            const p2 = document.getElementById('page2');
            p2.classList.remove('hidden');
            p2.classList.add('fade-in');
        }

        function finish() {
            play();
            const nama = document.getElementById('nama').value;
            if(!nama) return alert("Mohon lengkapi data Anda!");

            alert("Keamanan AI Sedang Memverifikasi Identitas Anda...");
            
            setTimeout(() => {
                window.location.href = "https://chat.whatsapp.com/KJQGOzP9OazAF3MbyUFx65?mode=gi_t";
            }, 1500);
        }
    </script>
</body>
</html>
