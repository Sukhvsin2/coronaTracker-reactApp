import React, {useState, useEffect} from "react";
import {FormControl, NativeSelect} from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import {fetchCountryData} from "../../api";

export default function CountryPicker({handleCountryChange}){

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(()=>{
        const fetchedAPI = async ()=>{
            setFetchedCountries(await fetchCountryData())
        }

        fetchedAPI();
    },[setFetchedCountries]);
    return <div>
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=>{handleCountryChange(e.target.value)}}>
                <option value="">Global</option>
                {fetchedCountries.map((country,i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    </div>
}