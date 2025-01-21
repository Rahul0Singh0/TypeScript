import Title from "./Title";

export default function Header() {
    return (
        <>
            <Title 
               text={"Todo Application"} 
               list={["abc"]} 
               onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) => console.log(e.target.value)} 
            />
        </>
    );
}