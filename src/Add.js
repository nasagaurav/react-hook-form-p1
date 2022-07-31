import React from 'react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

function Add() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const insert = () => {};
  return (
    <div>
      <h1>Add new student</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('name', { required: true })}
          placeholder="name"
          name="name"
        />
        <div>{errors.name && <span>name required</span>}</div>
        <input
          {...register('email', { required: true })}
          placeholder="email"
          name="email"
        />
        <div>{errors.email && <span>email required</span>}</div>
        <input
          {...register('phone', { required: true })}
          placeholder="phone"
          name="phone"
        />
        <div>{errors.phone && <span>phone required</span>}</div>
        <input
          {...register('password', { required: true })}
          placeholder="password"
          name="password"
        />
        <div>{errors.password && <span>password required</span>}</div>
        <input
          {...register('gender', { required: true })}
          placeholder="gender"
          name="gender"
        />
        <div>{errors.gender && <span>gender required</span>}</div>
        <input
          {...register('status', { required: true })}
          placeholder="status"
          name="status"
        />
        <div>{errors.status && <span>status required</span>}</div>
        <button>insert</button>
      </form>
    </div>
  );
}
export default Add;
