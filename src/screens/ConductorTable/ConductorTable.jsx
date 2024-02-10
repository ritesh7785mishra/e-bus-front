import { LeftSection } from "../../components/leftSection/leftSection";
import { RightSection } from "../../components/rightSection/rightSection";
import ConductorTableContent from "../../components/tables/ConductorTableContent";

export default function ConductorTable() {
    return (
        <main className="flex">
            <LeftSection >
                <ConductorTableContent></ConductorTableContent>
            </LeftSection>
            <RightSection></RightSection>
        </main>


    )
}