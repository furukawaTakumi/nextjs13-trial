import { Horse } from "@/types/Horse"

export async function fetchHorse(id: string): Promise<Horse> {
  const response = await fetch(`http://localhost:8888/${id}.json`, {
    method: "GET"
  })

  if (!response.ok) {
    throw Error("復帰不可能なエラーが発生しました。")
  }

  const horse = await response.json() as Horse

  return horse
}