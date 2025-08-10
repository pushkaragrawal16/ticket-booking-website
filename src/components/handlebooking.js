// Remove "use client" - not needed for utility functions"

const handleBooking = async (params) => {
  try {
    const response = await fetch('http://localhost:5000/booking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        movieId: params.id,
        title: params.title,
        
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json(); // Use .json() instead of .text()
    console.log('Booking successful:', data);
    return data; // Return the response data
  } catch (error) {
    console.error('Booking failed:', error);
    throw error; // Re-throw to let calling code handle it
  }
};

export default handleBooking;