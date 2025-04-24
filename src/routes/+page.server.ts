import type { JobData, Profile } from "$lib/types";
import FusionCollection from "fusionable/FusionCollection";

export async function load() {
    const response = await fetch('https://api.github.com/users/dmdez')
    const profile: Profile = await response.json();
    const collection = new FusionCollection()
        .loadFromDir('src/content')
        .orderBy('date', 'desc');

    const jobs: JobData[] = collection.getItemsArray();

    return { jobs, profile };
}