import { useAppContext } from "../context/AppContext"
import close from "../assets/blue-close.png"
import { getPermissions } from "../services/myCompanyApi";
import { useEffect, useState } from "react";
import check from "../assets/g-check.png"

export function AuthTable({ setTableShown , roles }) {

    const [permissions , setPermissions] = useState([]);

    useEffect(() => {
        getPermissions(10).then(setPermissions)
    }, [])

    const { translation } = useAppContext();

    return (
        <div className="bg-white w-full h-full fixed z-50 overflow-scroll">
            <div className="p-4 w-full flex items-center justify-between border-b bg-white border-b-[#eee] sticky top-0">
                <h1 className="text-xl text-[#212529] font-semibold">{translation?.data?.business?.roles_table}</h1>
                <img className="cursor-pointer" onClick={() => setTableShown(false)} src={close} alt="" />
            </div>
            <div className="p-4">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="text-start p-2.5 text-sm text-[#212529]">{translation?.data?.business?.title}</th>
                            {roles.map(item => (
                                <th className="text-start p-2.5 text-sm text-[#212529]" key={item.id}>{item.title}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {permissions?.map(group => (
                            <>
                                <tr className="my-2.5 p-2.5" key={group.title}>
                                    <td className="font-semibold bg-[#eeeeee] rounded-lg" colSpan={1 + roles.length}>
                                        <p className="my-2.5 p-2.5 rounded-lg">{group.title}</p>
                                    </td>
                                </tr>
                                {group.permissions.map(item => (
                                    <tr className="text-start" key={item.key}>
                                        <td className=" gap-2 p-2.5 text-sm text-[#212529] font-medium">
                                            {item.title}
                                        </td>
                                        <td>
                                            <img src={check} alt="" />
                                        </td>
                                        <td>
                                            <img src={check} alt="" />
                                        </td>
                                        <td>
                                            <img src={check} alt="" />
                                        </td>
                                        <td>
                                            <img src={check} alt="" />
                                        </td>
                                        <td>
                                            <img src={check} alt="" />
                                        </td>
                                        <td>
                                            <img src={check} alt="" />
                                        </td>
                                        <td>
                                            <img src={check} alt="" />
                                        </td>
                                        <td>
                                            <img src={check} alt="" />
                                        </td>
                                        <td>
                                            <img src={check} alt="" />
                                        </td>
                                    </tr>
                                ))}
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}