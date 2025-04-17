"use client";

import { sortType } from "@/Assets/sortItems";
import { useRouter, useSearchParams } from "next/navigation";

const SortDropdown = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleSortChange = (e) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("sort", e.target.value);
        router.push(`?${params.toString()}`);
    };

    return (
        <select onChange={handleSortChange} className="rounded-lg bg-slate-700">
            <option value={sortType.DEFAULT}>Sort</option>
            <option value={sortType.PRICE_ASC}>Price: Low to High</option>
            <option value={sortType.PRICE_DESC}>Price: High to Low</option>
            <option value={sortType.RATING_DESC}>Rating: High to Low</option>
            <option value={sortType.RATING_ASC}>Rating: Low to High</option>
        </select>
    );
};

export default SortDropdown;
