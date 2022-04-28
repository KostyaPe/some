<?php
//v5

session_start();
$_SESSION["pixel"]						= $_GET['pixel_id'] ?? '';
$_SESSION["name"]						= $_GET['name'] ?? '';
$_SESSION["phone"]						= $_GET['phone'] ?? '';


?>
<!doctype html>
<html class="no-js" lang="ru">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Terima kasih banyak</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width">

    <!-- Facebook Pixel Code -->
    <script>
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '<?php echo $_SESSION["pixel"];?>');
        fbq('track', 'PageView');
        fbq('track', 'Purchase', {currency: "USD", value: 13.00});
    </script>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box
        }

        html {
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%
        }

        body {
            font-family: Roboto, Arial, sans-serif;
            line-height: 1.6;
            color: #545454;
            background: url("files/img/bg.jpg") center center no-repeat;
            background-size: cover;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale
        }

        .container {
            box-sizing: border-box;
            display: flex;
            width: 100%;
            height: 100%;
            margin: 0 auto;
            justify-content: center;
            align-content: center
        }

        .container .wrap {
            font-size: 18px;
            width: 740px;
            padding-top: 30px
        }

        .container h1 {
            font-size: 24px;
            font-weight: 400;
            font-style: italic;
            color: #333;
            text-align: center;
            margin-bottom: .8em
        }

        .container h2 {
            font-size: 18px;
            color: #689f38;
            font-weight: 400;
            margin-bottom: .8em
        }

        .container p {
            margin-bottom: 0.8em
        }

        .container .features {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        .container .features > div {
            display: flex;
            text-align: center;
            flex-direction: column;
            justify-content: flex-start;
        }

        .container .features > div > div:first-child {
            height: 80px;
        }

        .container .features img {
            display: block;
            margin: 0 auto;
        }

        .container .features p {
            font-size: 14px;
        }

        .container .features p span {
            display: block;
            font-size: 17px;
            color: #000;
        }

        .container .info {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            font-size: 16px;
            position: relative;
            padding: 30px 0;
            margin-bottom: 30px;
        }

        .container .info:before, .container .info:after {
            content: "";
            display: block;
            position: absolute;
            width: 100%;
            height: 1px;
            left: 0;
            background: #CBCBCB;
        }

        .container .info:before {
            top: 0;
        }

        .container .info:after {
            bottom: 0;
        }

        .container .info > div {
            width: 47%;
        }

        .container .info > div:last-child p {
            line-height: 40px;
        }

        .container .phones > div {
            flex: 1 1 auto;
            line-height: 36px;
            margin: 2px 0;
            text-align: center;
        }

        .container .phones > div:first-child {
            border-right: 1px solid #fff;
        }

        .container .phones {
            height: 40px;
            background: #689f38;
            border-radius: 6px;
            color: #fff;
            font-weight: 700;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
        }

        @media (max-width: 739px) {
            .container {
                width: 100%;
            }
        }
    </style>
</head>
<body>
<div class="container">
    <div class="wrap">
        <h1><span class="name"><?php echo $_SESSION["name"]; ?></span>, Terima kasih atas pesanan Anda!</h1>
        <p>Selamat pesanan Anda berhasil . Konsultan kesehatan akan segera menghubungi Anda, mohon untuk selalu
            perhatikan telepon Anda.</p>
        <p>Harap periksa kembali informasi pendaftaran Anda agar konsultan dapat menghubungi Anda kembali.</p>
        <p>Nama: <span class="name"><?php echo $_SESSION["name"]; ?></span></p>
        <p>Nomor telepon: <span class="phone"><?php echo $_SESSION["phone"]; ?></span></p>
        <h2>Harap perhatikan telepon Anda, konsultan akan menghubungi Anda dalam waktu 15 menit, dalam kurun <b>waktu
                mulai pukul 7:00 hingga 22:00</b></h2>
        <div class="info">
            <div><p>Demi mempermudah proses pemesanan Anda, contact center kami akan menghubungi Anda dengan nomor di
                    bawah ini.</p>
            </div>
            <div><p>Anda juga bisa memberikan pertanyaan seputar produk dan proses pemesanan demi kepuasan
                    pelanggan.</p></div>
            <div>
                <div class="phones">
                    <div>021510109XX</div>
                    <div>+62 8111962217XX</div>
                </div>
            </div>
            <div><p>Salam hangat</p></div>

        </div>
        <div class="features">
            <div>
                <div>
                    <img src="files/img/01.png" width="60px"/>
                </div>
                <div>
                    <p>
                        <span>Produk ini merupakan</span>
                        100% produk asli
                    </p>
                </div>
            </div>
            <div>
                <div>
                    <img src="files/img/02.png" width="50px"/>
                </div>
                <div>
                    <p>
                        Produk sudah
                        <span>terdaftar di <b>BPOM</b></span>
                    </p>
                </div>
            </div>
            <div>
                <div>
                    <img src="files/img/03.png" width="85px"/>
                </div>
                <div>
                    <p>
                        <span><b>Gratis ongkos kirim</b></span>
                        erima barang Anda,<br/> periksa produk lalu bayar
                    </p>
                </div>
            </div>
            <div>
                <div>
                    <img src="files/img/04.png" width="60px"/>
                </div>
                <div>
                    <p>
                        <span>Diskon tambahan <b>10%</b></span>
                        untuk transaksi<br/> pembayaran transfer
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>