import openai from "@/openai";

export async function POST(request: Request) {
  const { todos } = await request.json();
  console.log(todos);

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    temperature: 0.8,
    n: 1,
    stream: false,
    messages: [
      {
        role: "system",
        content: `When resonding, welcome the user always as Miss. Erizta and say welcome to the Trello Clone App! Limit the response to 250 characters`,
      },
      {
        role: "user",
        content: `Hi there, provide a summary of the following todos. Count how many todos are in each category such as To do, in progress and done, then tell teh user to have a productive day! Here's the data: ${JSON.stringify(
          todos
        )}`,
      },
    ],
  });

  const { data } = response;
  console.log(data);
  console.log(data.choices[0].message);
}
