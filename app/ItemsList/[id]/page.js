import ItemsForm from "@/app/(components)/ItemsForm";
export default async function Page({params}) {
    const x = await params;
    return(
        <div>
           <ItemsForm /> 
        </div>
    )
}