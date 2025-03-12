const eventContactEmail = (name, email, contact, message) => {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Appointment Confirmation</title>
        <style>
            body {
                background-color: #f4f4f4;
                font-family: Arial, sans-serif;
                font-size: 16px;
                color: #333333;
                margin: 0;
                padding: 0;
            }
    
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                text-align: center;
                background-color: #ffffff;
                border-radius: 10px;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            }
    
            .logo {
                max-width: 200px;
                margin-bottom: 20px;
            }
    
            .message {
                font-size: 24px;
                font-weight: bold;
                margin-bottom: 20px;
                color: #333333;
            }
    
            .body {
                font-size: 18px;
                margin-bottom: 20px;
                text-align: left;
                color: #666666;
            }
    
            .info {
                margin-bottom: 10px;
            }
    
            .info p {
                margin: 5px 0;
            }
    
            .highlight {
                font-weight: bold;
                color: #FF4500;
            }
    
            .cta {
                display: inline-block;
                padding: 10px 20px;
                background-color: #FFD60A;
                color: #000000;
                text-decoration: none;
                border-radius: 5px;
                font-size: 16px;
                font-weight: bold;
                margin-top: 20px;
            }
    
            .support {
                font-size: 14px;
                color: #999999;
                margin-top: 20px;
            }
        </style>
    </head>
    
    <body>
        <div class="container">
            <a href="brijinternationalservices.com">
                <img class="logo" src="https://i.ibb.co/wrhB8xKv/Untitled-design-2.png" alt="Logo">
            </a>
            <div class="message">New Contact Query</div>
            <div class="body">
                <p>Dear <span class="highlight">Team</span>,</p>
                <div class="info">
                    <p>You have received a new contact request:</p>
                    <p><span class="highlight">Name:</span> ${name}</p>
                    <p><span class="highlight">Email:</span> ${email}</p>
                    <p><span class="highlight">Contact Number:</span> ${contact}</p>
                    <p><span class="highlight">Message:</span> ${message}</p>
                </div>
            </div>
            <a href="mailto:${email}" class="cta">Reply to ${name}</a>
            <div class="support">
                <p>If you need any further details, please feel free to contact us.</p>
            </div>
        </div>
    </body>
    
    </html>`;
};

module.exports = { eventContactEmail };
