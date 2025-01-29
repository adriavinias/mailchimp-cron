const { fetchSubscribers } = require("./services/graphqlService");
const { generateEmailHTML } = require("./services/templateService");
const { sendEmail } = require("./services/emailService");

async function main() {
  console.log("📡 Obteniendo suscriptores...");
  const subscribers = await fetchSubscribers();

  if (subscribers.length === 0) {
    console.log("⚠️ No hay suscriptores.");
    return;
  }

  console.log("✍️ Generando emails...");
  for (const user of subscribers) {
    const html = generateEmailHTML({ name: user.name });
    await sendEmail(user.email, "Tu Newsletter", html);
  }

  console.log("✅ Emails enviados exitosamente.");
}

main();
