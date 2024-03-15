import action from "@/app/actions"

export async function  GET(){
    await action()
    return Response.json({ message : "revalidated" })
}