import React, { useState } from 'react';
import toast from 'react-hot-toast';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';

function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
        content: ""
    });
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const {name, phone, address, content} = formData;
        const phoneRegex = /^[0-9]{10}$/;
        const newErrors = {};

        if(!name.trim()){
            newErrors.name = "Họ tên không được để trống";
        }

        if(!address.trim()){
            newErrors.address = "Địa chỉ không được để trống";
        }

        if(!phone.trim()){
            newErrors.phone = "Số điện thoại không được trống"
        }else if(!phoneRegex.test(phone)){
            newErrors.phone = "Số điện thoại phải là 10 chữ số"
        }

        if(!content.trim()){
            newErrors.content = "Nội dung không được để trống";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Kiểm tra nếu không có lỗi
    }


    const handleChangeValue = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        setErrors({
            ...errors,
            [name]: "" // Xóa lỗi khi người dùng sửa nội dung
        });
    }
    
    const handleSendContact = async () => {
        if (!validateForm()) return;

        // Tạo nội dung email
        const emailData = {
            name: formData.name,
            address: formData.address,
            phone: formData.phone,
            content: formData.content,
        }

        try {
            await emailjs.send(
                'service_5fal3in', // ID của service email
                'template_92vf8up', // ID của template email
                emailData,  // Dữ liệu email
                '-ukl6JeuBmXsF5uKL' // User ID của bạn trong EmailJS
            );
            toast.success('Liên hệ thành công');
        } catch (error) {
            console.log(error);
            toast.error('Liên hệ thất bại');
        }
    };
    

    return (
        <>
            {/* Hello world */}
            <div className="container mx-auto px-4 mt-4">
                <main className="flex flex-wrap py-8">
                    <section className="w-full lg:w-2/3 pr-4">
                        <h3 className="text-lg font-bold mb-4">Liên hệ với chúng tôi:</h3>
                        <div className="w-full">
                            <div className="w-2/3">
                                <div className="mb-4">
                                    <input
                                        name='name'
                                        className="w-full p-2 border border-gray-300 rounded"
                                        placeholder="Họ và tên..."
                                        type="text"
                                        onChange={handleChangeValue}
                                    />
                                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                </div>
                                <div className="mb-4">
                                    <input
                                        name='phone'
                                        className="w-full p-2 border border-gray-300 rounded"
                                        placeholder="Số điện thoại..."
                                        type="text"
                                        onChange={handleChangeValue}
                                    />
                                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                                </div>
                                <div className="mb-4">
                                    <input
                                        name='address'
                                        className="w-full p-2 border border-gray-300 rounded"
                                        placeholder="Địa chỉ của bạn..."
                                        type="text"
                                        onChange={handleChangeValue}
                                    />
                                    {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                                </div>
                                <div className="mb-4">
                                    <textarea
                                        name='content'
                                        className="w-full p-2 border border-gray-300 rounded"
                                        placeholder="Nội dung liên hệ..."
                                        defaultValue={""}
                                        onChange={handleChangeValue}
                                    />
                                    {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content}</p>}
                                </div>
                                <button
                                    onClick={handleSendContact}
                                    className="bg-red-600 text-white px-4 py-2 rounded"
                                    type="submit"
                                >
                                    GỬI LIÊN HỆ
                                </button>
                            </div>
                        </div>
                    </section>
                   
                </main>
            </div>
        </>
    );
}

export default ContactPage;


