import { deleteAdmin } from "../../controllers/adminController";


export default function AdminTable({ allAdmin }) {

    async function handleDelete(id) {
        console.log(id);
        const deletedAdmin = await deleteAdmin(id)
        console.log('deletedAdmin', deletedAdmin);
        debugger;
    }


    return (


        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>

                        <th scope="col" class="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            email
                        </th>
                        <th scope="col" class="px-6 py-3">
                            contact number
                        </th>
                        <th scope="col" class="px-6 py-3">
                            role
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {allAdmin.map((admin) => (
                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {admin.name}
                            </th>
                            <td class="px-6 py-4">
                                {admin.email}
                            </td>
                            <td class="px-6 py-4">
                                {admin.contact_no}
                            </td>
                            <td class="px-6 py-4">
                                {admin.role.map((role) => {
                                    return (<p className="text-white mr-2">{role}</p>)
                                })}
                            </td>

                            <td class="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                <button onClick={() => {
                                    handleDelete(admin._id)
                                }}>
                                    <a href="#" className="font-medium text-red-600 dark:text-red-500 ml-2">Delete</a>
                                </button>

                            </td>
                        </tr>
                    ))}


                </tbody>
            </table>
        </div>

    )
}