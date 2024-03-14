'use client'
import React, { useEffect, useState, useRef } from 'react';
import Navigation from '@/components/Navigation';
import { useForm } from 'react-hook-form';
import { FaTrash, FaCheck } from 'react-icons/fa';

const Tasks = () => {
    const [btn, setBtn] = useState('Add');
    const [tasks, setTasks] = useState([]);
    const ref = useRef();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    const fetchData = async () => {
        try {
            const response = await fetch('/tasks/api/data');
            const data = await response.json();
            
            setTasks(data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

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

    const handleComplete = async (task_id) => {
        let x = await fetch('/tasks/api/complete', {
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

    useEffect(() => {
        const main = async () => {
            await fetchData()
        }

        main()
    }, []);


    const onSubmit = async (data) => {
        let x = await fetch('/tasks/api/add', {
            method: 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(data)
        })

        await fetchData()
        ref.current.reset()
    };

    return (
        <>
            <Navigation />
            <div className='md:min-h-[82vh] min-h-[79.5vh] flex flex-col items-center gap-16 bg-slate-900 p-3'>
                <h1 className='text-center bg-gradient-radial w-full p-5 border-b-2 border-red-600 from-red-600 via-red-900 to-red-300 inline-block text-transparent bg-clip-text md:text-5xl text-3xl font-bold'>TaskPro&trade;</h1>
                <form ref={ref} action="" onSubmit={handleSubmit(onSubmit)} className='flex gap-3 items-center justify-center w-full'>
                    <input {...register('task', { maxLength: { value: 40, message: 'Too Long' } })} type="text" placeholder='Enter Task' className='md:text-base text-sm font-ubuntu md:p-3 p-2 border-2 transition-all duration-500 ring-slate-900 ring-2 focus:ring-cyan-300 border-slate-900 hover:border-cyan-300 bg-slate-700 text-white rounded-xl' required />
                    <input disabled={isSubmitting} type="submit" value={btn} className='disabled:opacity-50 md:text-base text-sm md:py-[0.65rem] py-[0.40rem] px-6 hover:text-cyan-300 transition-all duration-500 hover:border-cyan-300 border-2 border-slate-700 bg-white/10 backdrop-blur-md text-white cursor-pointer rounded-xl' />
                </form>
                {errors.task && <p className='text-red-600 font-bold md:text-base etxt-xs'>Error: {errors.task.message}</p>}
                <div className="tasks w-full">
                    {tasks.length == 0 ? <p className='text-white text-center md:text-base text-xs'>No tasks</p> : ""}
                    {tasks.map((item) =>  (
                        <div key={item.task_id} className="mx-auto task my-2 p-4 flex justify-between items-center md:w-1/2 w-full border-2 border-cyan-500 bg-white bg-opacity-5">
                            <span className='md:text-base text-xs text-cyan-500 text-bold'>{item.name}</span>
                            <div className="flex gap-3">
                                <button onClick={() => handleComplete(item.task_id)} className='text-xl text-slate-600 hover:text-green-500 transition-all duration-500'><FaCheck /></button>
                                <button onClick={() => handleDelete(item.task_id)} className='btn-s md:py-2 md:px-4 px-3 py-1 text-sm md:text-base bg-slate-600 border-2 border-slate-800 hover:border-red-600 transition-all duration-500 rounded-lg'><FaTrash className='inner transition-all duration-500'/></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Tasks;
