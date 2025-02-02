

const ProductPage: React.FC = () => {
    return (
      <div className="container mx-auto px-4 py-8 ">
       
  
        {/* Contact Form Section */}
        <h2 className="text-2xl font-bold mb-4 mt-12 flex justify-center items-center">Get In Touch With Us</h2>
        <p className="mb-6 flex justify-center items-center">For More Information About Our Products & Services, Please Feel Free To Drop Us An Email.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="flex  flex-col justify-center items-center">
            <h3 className="font-semibold mb-2 ">Address</h3>
            <p className="">258 5th St. Avenue, New <br /> York, NY 100000, United <br /><span className="flex justify-center items-center">States</span></p>
            <h3 className="font-semibold mb-2 mt-4">Phone</h3>
            <p>Mobile: (+84) 546-5789</p>
            <p>Hotline: (+84) 656-5789</p>
            <h3 className="font-semibold mb-2 mt-4">Working Time</h3>
            <p>Monday-Friday: 9:00 - 22:00</p>
            <p>Saturday-Sunday: 9:00 - 21:00</p>
          </div>
          <form className="flex flex-col">
            <input type="text" placeholder="Your name" className="mb-4 border p-2 rounded" required />
            <input type="email" placeholder="Email address" className="mb-4 border p-2 rounded" required />
            <input type="text" placeholder="Subject" className="mb-4 border p-2 rounded" />
            <textarea placeholder="Message" className="mb-4 border p-2 rounded" rows={4} required></textarea>
            <button type="submit" className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">Submit</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default ProductPage;