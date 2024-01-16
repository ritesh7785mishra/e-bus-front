import AdminForm from "../../components/forms/adminForm";
import { LeftSection } from "../../components/leftSection/leftSection";
import { RightSection } from "../../components/rightSection/rightSection";

export default function AddAdmin() {
    return (
        <main className="flex">
            <LeftSection>
                <AdminForm />
            </LeftSection>
            <RightSection></RightSection>
        </main>
    )
}