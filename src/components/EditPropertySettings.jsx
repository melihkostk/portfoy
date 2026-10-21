import { PropertySettingsCard } from "./PropertySettingsCard"

export function EditPropertySettings({ detail, navigate, id, setToogleMenu, setCopyPopUp, setDeletePopUp, setSoldPopUp , translation }) {
    return (
        <div className="w-full max-w-[90%]">
            <div className="w-full mb-7.5">
                <div className="flex flex-wrap max-[992px]:flex-col ">
                    <PropertySettingsCard
                        title={translation?.data?.business?.set_property_passive}
                        description={translation?.data?.business?.set_property_passive_description}
                        button={translation?.data?.business?.set_passive}
                        disabled={detail?.status === "draft"}
                        onClick={() => setToogleMenu(true)}
                    />
                    <PropertySettingsCard
                        title={translation?.data?.business?.boost_property}
                        description={translation?.data?.business?.boost_property_description}
                        button={translation?.data?.business?.boost_property}
                        onClick={() => navigate(`/properties/${id}/boost`)}
                        status={detail?.status}
                    />
                    <PropertySettingsCard
                        title={translation?.data?.business?.clone_property}
                        description={translation?.data?.business?.clone_property_description}
                        button={translation?.data?.business?.copy}
                        onClick={() => setCopyPopUp(true)}
                        status={detail?.status}
                    />
                    <PropertySettingsCard
                        title={translation?.data?.business?.delete_property}
                        description={translation?.data?.business?.delete_property_description}
                        button={translation?.data?.business?.delete_property}
                        onClick={() => setDeletePopUp(true)}
                        status={detail?.status}
                    />
                    <PropertySettingsCard
                        title={translation?.data?.business?.property_sold}
                        description={translation?.data?.business?.property_sold_action_description}
                        button={translation?.data?.business?.property_sold}
                        status={detail?.status}
                        onClick={() => setSoldPopUp(true)}
                    />
                </div>
            </div>
        </div>
    )
}
