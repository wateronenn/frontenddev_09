'use client'

import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Select, MenuItem } from "@mui/material"

export default function LocationDateReserver(){
    return (
        <div className="bg-slate-100 rounded-lg flex items-center gap-4 p-4 m-16">

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker />
            </LocalizationProvider>

            <Select
                variant="outlined"
                name="location"
                id="location"
                className="w-[200px]"
                defaultValue=""
            >
                <MenuItem value="" disabled>Select Location</MenuItem>
                <MenuItem value="Spark Space">Spark Space</MenuItem>
                <MenuItem value="The Grand Table">The Grand Table</MenuItem>
                <MenuItem value=" The Bloom Pavilion"> The Bloom Pavilion</MenuItem>
            </Select>

        </div>
    )
}