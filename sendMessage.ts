import {
  WAConnection,
  MessageType,
  MessageOptions,
  Mimetype,
} from '@adiwajshing/baileys';

const sendMessageWA = async ({ number }: { number: string }) => {
  const conn = new WAConnection();
  conn.loadAuthInfo('./auth_info.json');
  await conn.connect();

  const exists = await conn.isOnWhatsApp(number);
  if (exists) {
    console.log(`${number} exists on WhatsApp, as jid: ${exists.jid}`);
    const sentMsg = await conn.sendMessage(
      exists.jid,
      'oh hello there',
      MessageType.text
    );
    return {
      status: true,
      message: 'Kirim pesan berhasil',
    };
  } else {
    conn.close();
    return {
      status: false,
      message: 'Nomor tujuan salah.',
    };
  }
};

const number = '081234567890';

sendMessageWA({ number });
