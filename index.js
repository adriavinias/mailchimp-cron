const { fetchSubscribers } = require("./services/graphqlService");
const { generateEmailHTML } = require("./services/templateService");
const { sendEmail } = require("./services/emailService");

async function main() {
  console.log("📡 Obteniendo suscriptores...");
  const subscribers = [{name: 'Miquel', email:'adria.vinas.pascual@gmail.com'}];//await fetchSubscribers();
  const items = [{image_url:'https://img.common-ground.io/releases/1074976700/img-c-2697277788.jpeg', title:'Butterfly', price:'51€'},
  {image_url:'https://img.common-ground.io/releases/1074976700/img-c-2697277788.jpeg', title:'Butterfly', price:'51€'}]
  if (subscribers.length === 0) {
    console.log("⚠️ No hay suscriptores.");
    return;
  }

  console.log("✍️ Generando emails...");
  for (const user of subscribers) {
    const html = generateEmailHTML({ name: user.name, items });
    await sendEmail(user.email, "Tu Newsletter", html);
  }

  console.log("✅ Emails enviados exitosamente.");
}

main();
