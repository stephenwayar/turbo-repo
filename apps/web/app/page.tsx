"use client"
import { Button, Input } from "@repo/ui";
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// export async function getServerEnvironment() {
//   const googleKey = process.env.GOOGLE_KEY;

//   return {
//     googleKey,
//   };
// }

export default function Home() {
  // const { googleKey } = await getServerEnvironment();
  const [opened, { open, close }] = useDisclosure(false);

  const query = useQuery({ 
    queryKey: ['todos'],
    queryFn: async () => {
     const res = axios.get('https://jsonplaceholder.typicode.com/todos')

     return res
    }
  })

  console.log(query.data)

  return (
    <div className="bg-gray-800 space-y-10 text-white mx-auto text-center max-w-96 w-full p-5 m-5">
      <div>
        <Button onClick={open}>
          Hey there
        </Button>
      </div>

      <div>
        <Input type="password" className="border-green-500 border-2 w-full" />
      </div>

      {/* <div>
        <p>Server key: {googleKey}</p>
      </div> */}

      <div>
        <p>Public key: {process.env.NEXT_PUBLIC_SERVER_URL}</p>
      </div>

      <Modal opened={opened} onClose={close} title="Authentication">
        {/* Modal content */}
      </Modal>
    </div>
  );
}