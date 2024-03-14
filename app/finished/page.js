'use client'
import React, { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import { FaTrash } from 'react-icons/fa'

const Finished = () => {
    const [tasks, setTasks] = useState([])

    const fetchData = async () => {
        try {
            const response = await fetch('/tasks/api/finished');
            const data = await response.json();
            
            setTasks(data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    useEffect(() => {
        const main = async () => {
            await fetchData()
        }

        main()
    }, []);

    const handleDelete = async (task_id) => {
        let x = await fetch('/tasks/api/delete', {
            method: 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                task_id
            })
        })

        await fetchData()
    }

    return (
        <>
            <Navigation showTask={true}/>
            <div className="md:min-h-[82vh] min-h-[79.5vh] flex flex-col items-center gap-16 bg-slate-900 p-3">
                <h1 className='text-white font-extrabold md:text-5xl text-4xl font-ubuntu mt-[10vh] mb-1 p-6 border-2 rounded-2xl'>Finished Tasks</h1>
                <hr className='bg-white w-full'/>
                <div className="tasks w-full">
                    {tasks.length == 0 ? <p className='text-white text-center md:text-base text-xs'>No finished tasks</p> : ""}
                    {tasks.map((item) => (
                        <div key={item.task_id} className="mx-auto task my-2 p-4 flex justify-between items-center md:w-1/2 w-full border-2 border-cyan-500 bg-white bg-opacity-5">
                            <span className='text-cyan-500 md:text-base text-xs text-bold'>{item.name}</span>
                            <div className="flex gap-3">
                                <button onClick={() => handleDelete(item.task_id)} className='btn-s md:py-2 md:px-4 px-3 py-1 text-sm md:text-base bg-slate-600 border-2 border-slate-800 hover:border-red-600 transition-all duration-500 rounded-lg'><FaTrash className='inner transition-all duration-500'/></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Finished
