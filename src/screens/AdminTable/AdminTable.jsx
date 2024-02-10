import { LeftSection } from "../../components/leftSection/leftSection";
import { RightSection } from "../../components/rightSection/rightSection";
import AdminTableContent from "../../components/tables/AdminTableContent";

export default function AdminTable() {
    return (
        <main className="flex">
            <LeftSection >
                <AdminTableContent />
            </LeftSection>
            <RightSection></RightSection>
        </main>
    )
}