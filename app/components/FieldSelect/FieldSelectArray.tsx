"use client"

import { useState } from "react"

interface FieldSelectArrayProps {
    label?: string
    error?: string
    fields?: any[]
    prefix?: string
    onChange?: (value: any) => void
}

const FieldSelectArray: React.FC<FieldSelectArrayProps> = ({
    label,
    error,
    fields,
    prefix='',
    onChange,
}) => {
    const [selected, setSelected] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelected(e.target.value)
        onChange?.(parseInt(e.target.value))
    }

    return (
        <div className='w-full h-full flex flex-col gap-1 justify-between'>
            <label className="text-(--custom-text-color) font-semibold text-[0.9rem]">
                {label}
            </label>

            <div className="relative cursor-pointer">
                {
                    fields &&
                    <select
                        value={selected}
                        onChange={handleChange}
                        className={`
            w-full appearance-none rounded-xl border bg-white px-5 py-2
            text-gray-700 outline-none transition focus:border-red-500`}
                    >
                        <option value="" disabled>
                            Select your field...
                        </option>

                        {fields.map((field: any) => (
                            <option key={field} value={field}>
                                {prefix}{field}
                            </option>
                        ))}
                    </select>
                }

                <svg
                    className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19 9-7 7-7-7"
                    />
                </svg>
            </div>

            {error && (
                <p className="mt-1 text-sm text-red-500">
                    {error}
                </p>
            )}
        </div>
    )
}

export default FieldSelectArray