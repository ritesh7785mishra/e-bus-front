import { useEffect, useState } from "react";
import { getAllConductors } from "../../controllers/adminController";

export default function ConductorTableContent() {
    const [allConductor, setAllConductor] = useState([]);
    useEffect(() => {
        async function getConductorData() {
            const allConductor = await getAllConductors()
            setAllConductor(allConductor)
        }

        getConductorData();


    }, [])


    return (


        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            govt_id
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            email
                        </th>
                        <th scope="col" class="px-6 py-3">
                            contact number
                        </th>
                        {/* <th scope="col" class="px-6 py-3">
                            Location cordinates
                        </th> */}
                        <th scope="col" class="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {
                        allConductor.map((conductor) => {
                            return (
                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {conductor.govt_id}
                                    </th>
                                    <td class="px-6 py-4">
                                        {conductor.name}
                                    </td>
                                    <td class="px-6 py-4">
                                        {conductor.email}
                                    </td>
                                    <td class="px-6 py-4">
                                        {conductor.contact_no}
                                    </td>

                                    <td class="px-6 py-4">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>

    )
}