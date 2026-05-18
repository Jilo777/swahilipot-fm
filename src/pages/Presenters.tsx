import React from 'react';
import { Link } from 'react-router-dom';
import { presenters } from '@/data/presentersData';

const Presenters = () => {
  return (
    <div className='relative overflow-hidden min-h-screen'>
      <video
        className='absolute inset-0 h-full w-full object-cover'
        src='/motion/logo.mp4'
        autoPlay
        muted
        loop
        playsInline
      />
      <div className='absolute inset-0 bg-black/60' />

      <div className='relative z-10 container mx-auto px-4 py-16'>
        {/* Header Section */}
        <div className='mb-16 text-center'>
          <p className='text-sm font-semibold text-white/80 mb-4 tracking-widest uppercase'>
            WE ARE FEW
          </p>
          <h1 className='text-5xl md:text-6xl font-display font-bold mb-6 text-white'>
            <span className='text-blue-300'>Our Presenters</span>
          </h1>
          <p className='text-lg text-white/80 max-w-2xl mx-auto'>
            Meet the voices and personalities that bring Swahilipot FM to life
            every day
          </p>
        </div>

        {/* Presenters Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
          {presenters.map((presenter) => (
            <div
              key={presenter.id}
              className='flex flex-col items-center text-center'
            >
              {/* Circular Image with Blue Background */}
              <div className='relative mb-6'>
                <div className='absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-60'></div>
                <div className='relative w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500 bg-gray-200'>
                  <img
                    src={
                      presenter.image
                        ? presenter.image
                        : `https://ui-avatars.com/api/?name=${encodeURIComponent(presenter.name)}&background=2295e2&color=fff&size=160`
                    }
                    alt={presenter.name}
                    className='w-full h-full object-cover'
                    loading='lazy'
                  />
                </div>
              </div>

              {/* Info */}
              <h3 className='text-xl font-semibold mb-1 text-white'>{presenter.name}</h3>
              <p className='text-sm text-blue-300 mb-4 font-medium'>{presenter.role}</p>

              {/* Profile Link */}
              <Link
                to={`/presenters/${presenter.id}`}
                className='text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors'
              >
                View Profile →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Presenters;
