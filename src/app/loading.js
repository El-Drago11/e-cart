import LoaderCard from "@/Common/LoaderCard";

const loading = () => {
    return (
        <>
            {[...new Array(Math.floor(4))].map((_, i) => {
                return <LoaderCard key={i} />
            })}
        </>
    )
}

export default loading;
