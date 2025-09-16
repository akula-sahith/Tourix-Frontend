import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, X, Mail, Lock, User, Github, Apple } from 'lucide-react';

const VendorAuth = ({ isOpen = true, onClose = () => {} }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [isLoginView, setIsLoginView] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (!isLoginView && formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!isLoginView && !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must contain uppercase, lowercase, and number';
    }

    if (!isLoginView) {
      if (!formData.firstName.trim()) {
        newErrors.firstName = 'First name is required';
      }
      if (!formData.lastName.trim()) {
        newErrors.lastName = 'Last name is required';
      }
      if (!formData.confirmPassword.trim()) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
      if (!formData.agreeTerms) {
        newErrors.agreeTerms = 'You must agree to the terms and conditions';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAuth = async () => {
    if (!validateForm()) return;
    
    setIsLoading(true);
    setErrors({});

    try {
      if (isLoginView) {
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log('Vendor Login successful!', { email: formData.email });
        alert('Vendor signed in successfully!');
        onClose();
      } else {
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log('Vendor Signup successful!', { firstName: formData.firstName, email: formData.email });
        alert('Vendor account created successfully! Please check your email for verification.');
        setIsLoginView(true);
      }
    } catch (error) {
      console.error('Vendor authentication error:', error);
      setErrors({ general: 'An error occurred. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialAuth = async (provider) => {
    setIsLoading(true);
    setErrors({});
    
    try {
      console.log(`Initiating ${provider} OAuth for vendor...`);
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log(`${provider} authentication completed successfully`);
      alert(`Successfully signed in as vendor with ${provider}!`);
      onClose();
    } catch (error) {
      console.error(`${provider} vendor authentication error:`, error);
      setErrors({ general: `${provider} authentication failed. Please try again.` });
    } finally {
      setIsLoading(false);
    }
  };

  const handleTermsClick = (type) => {
    const messages = {
      terms: 'Vendor Terms and Conditions:\n\n1. Service Agreement\n2. Commission and Fees\n3. Content and Listing Policies\n4. Payment and Payouts',
      privacy: 'Vendor Privacy Policy:\n\n1. Data Collection\n2. Data Usage\n3. Data Protection\n4. User Rights'
    };
    alert(messages[type]);
  };
  
  const handleViewToggle = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setIsLoginView(!isLoginView);
        setIsTransitioning(false);
      }, 300);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <style>{`
        @keyframes fadeInScale { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
        .fade-in-scale { animation: fadeInScale 0.3s ease-out; }
        @keyframes form-morph-in { from { opacity: 0; transform: scale(0.9) translateY(20px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        @keyframes form-morph-out { from { opacity: 1; transform: scale(1) translateY(0); } to { opacity: 0; transform: scale(0.9) translateY(-20px); } }
        .form-morph-in { animation: form-morph-in 0.3s ease-out forwards; }
        .form-morph-out { animation: form-morph-out 0.3s ease-in forwards; }
        .spinner { border: 2px solid rgba(255, 255, 255, 0.3); border-top: 2px solid white; border-radius: 50%; width: 20px; height: 20px; animation: spin 1s linear infinite; }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
      `}</style>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className={`bg-white rounded-2xl shadow-2xl p-6 w-full max-w-[500px] max-h-[90vh] overflow-y-auto transform transition-all duration-300 ${isVisible ? 'scale-100 opacity-100 fade-in-scale' : 'scale-90 opacity-0'}`}>
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-amber-600">
                {isLoginView ? 'Vendor Sign In' : 'Become a Vendor'}
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                {isLoginView ? 'Access your marketplace dashboard' : 'Showcase your services and products'}
              </p>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-amber-600 transition-colors p-2 rounded-full hover:bg-amber-50" aria-label="Close form">
              <X className="w-5 h-5" />
            </button>
          </div>
          {/* General Error Message */}
          {errors.general && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
              <p className="text-red-700 text-sm font-medium">{errors.general}</p>
            </div>
          )}
          {/* Form Content */}
          <div className={`transition-all duration-300 ${isTransitioning ? 'form-morph-out' : 'form-morph-in'}`}>
            {isLoginView ? (
              // Login Form
              <>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-amber-700 mb-2">Email Address *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email" className={`w-full bg-amber-50 border rounded-lg px-10 py-3 text-amber-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all ${errors.email ? 'border-red-500 bg-red-50' : 'border-amber-200'}`} disabled={isLoading} />
                    </div>
                    {errors.email && (<p className="text-red-600 text-sm mt-1" role="alert">{errors.email}</p>)}
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-amber-700 mb-2">Password *</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input type={showPassword ? 'text' : 'password'} id="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Enter your password" className={`w-full bg-amber-50 border rounded-lg px-10 py-3 pr-12 text-amber-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all ${errors.password ? 'border-red-500 bg-red-50' : 'border-amber-200'}`} disabled={isLoading} />
                      <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-amber-600 transition-colors" aria-label={showPassword ? 'Hide password' : 'Show password'} disabled={isLoading}>
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                    {errors.password && (<p className="text-red-600 text-sm mt-1" role="alert">{errors.password}</p>)}
                  </div>
                  <button type="button" onClick={handleAuth} disabled={isLoading} className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2">
                    {isLoading ? (<div className="flex items-center justify-center"><div className="spinner mr-2"></div>Signing In...</div>) : ('Sign In')}
                  </button>
                  <div className="text-center pt-2">
                    <button type="button" className="text-sm text-amber-600 hover:text-amber-800 transition-colors" disabled={isLoading}>Forgot Password?</button>
                  </div>
                </div>
              </>
            ) : (
              // Signup Form
              <>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-amber-700 mb-2">First Name *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="Enter first name" className={`w-full bg-amber-50 border rounded-lg px-10 py-3 text-amber-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all ${errors.firstName ? 'border-red-500 bg-red-50' : 'border-amber-200'}`} disabled={isLoading} />
                      </div>
                      {errors.firstName && (<p className="text-red-600 text-sm mt-1" role="alert">{errors.firstName}</p>)}
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-amber-700 mb-2">Last Name *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Enter last name" className={`w-full bg-amber-50 border rounded-lg px-10 py-3 text-amber-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all ${errors.lastName ? 'border-red-500 bg-red-50' : 'border-amber-200'}`} disabled={isLoading} />
                      </div>
                      {errors.lastName && (<p className="text-red-600 text-sm mt-1" role="alert">{errors.lastName}</p>)}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-amber-700 mb-2">Email Address *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email" className={`w-full bg-amber-50 border rounded-lg px-10 py-3 text-amber-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all ${errors.email ? 'border-red-500 bg-red-50' : 'border-amber-200'}`} disabled={isLoading} />
                    </div>
                    {errors.email && (<p className="text-red-600 text-sm mt-1" role="alert">{errors.email}</p>)}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-amber-700 mb-2">Password *</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input type={showPassword ? 'text' : 'password'} id="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Create password" className={`w-full bg-amber-50 border rounded-lg px-10 py-3 pr-12 text-amber-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all ${errors.password ? 'border-red-500 bg-red-50' : 'border-amber-200'}`} disabled={isLoading} />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-amber-600 transition-colors" aria-label={showPassword ? 'Hide password' : 'Show password'} disabled={isLoading}>
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                      {errors.password && (<p className="text-red-600 text-sm mt-1" role="alert">{errors.password}</p>)}
                    </div>
                    <div>
                      <label htmlFor="confirmPassword" className="block text-sm font-medium text-amber-700 mb-2">Confirm Password *</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input type={showConfirmPassword ? 'text' : 'password'} id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} placeholder="Confirm password" className={`w-full bg-amber-50 border rounded-lg px-10 py-3 pr-12 text-amber-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all ${errors.confirmPassword ? 'border-red-500 bg-red-50' : 'border-amber-200'}`} disabled={isLoading} />
                        <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-amber-600 transition-colors" aria-label={showConfirmPassword ? 'Hide password' : 'Show password'} disabled={isLoading}>
                          {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                      {errors.confirmPassword && (<p className="text-red-600 text-sm mt-1" role="alert">{errors.confirmPassword}</p>)}
                    </div>
                  </div>
                  <div>
                    <label className="flex items-start cursor-pointer group">
                      <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleInputChange} className="w-4 h-4 text-amber-600 bg-white border-2 border-amber-300 rounded focus:ring-amber-500 focus:ring-2 mt-0.5 transition-colors" disabled={isLoading} />
                      <span className="text-sm text-gray-700 ml-3 leading-relaxed">
                        I agree to the <button type="button" className="text-amber-600 hover:text-amber-800 underline font-medium transition-colors" onClick={() => handleTermsClick('terms')} disabled={isLoading}>Terms and Conditions</button> and <button type="button" className="text-amber-600 hover:text-amber-800 underline font-medium transition-colors" onClick={() => handleTermsClick('privacy')} disabled={isLoading}>Privacy Policy</button>
                      </span>
                    </label>
                    {errors.agreeTerms && (<p className="text-red-600 text-sm mt-2" role="alert">{errors.agreeTerms}</p>)}
                  </div>
                  <button type="button" onClick={handleAuth} disabled={isLoading} className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2">
                    {isLoading ? (<div className="flex items-center justify-center"><div className="spinner mr-2"></div>Creating Account...</div>) : ('Create Account')}
                  </button>
                </div>
              </>
            )}
          </div>
          {/* Divider */}
          <div className="my-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-300"></div></div>
              <div className="relative flex justify-center text-sm"><span className="px-4 bg-white text-gray-500 font-medium">Or continue with</span></div>
            </div>
          </div>
          {/* Social Auth Buttons */}
          <div className="space-y-3 mb-6">
            <button onClick={() => handleSocialAuth('Google')} disabled={isLoading} className="w-full flex items-center justify-center px-4 py-3 bg-white hover:bg-gray-50 text-gray-700 font-medium rounded-lg border border-gray-300 transition-all duration-200 hover:shadow-md hover:border-gray-400 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2">
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg> Continue with Google
            </button>
            <div className="grid grid-cols-2 gap-3">
              <button onClick={() => handleSocialAuth('GitHub')} disabled={isLoading} className="flex items-center justify-center px-4 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-md disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                <Github className="w-5 h-5 mr-2" />GitHub
              </button>
              <button onClick={() => handleSocialAuth('Apple')} disabled={isLoading} className="flex items-center justify-center px-4 py-3 bg-black hover:bg-gray-800 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-md disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                <Apple className="w-5 h-5 mr-2" />Apple
              </button>
            </div>
          </div>
          {/* Toggle between Sign In and Sign Up */}
          <div className="text-center pt-4 border-t border-gray-200">
            {isLoginView ? (
              <p className="text-gray-600 text-sm">Don't have an account? <button onClick={handleViewToggle} className="text-amber-600 hover:text-amber-800 font-semibold transition-colors underline" disabled={isLoading}>Create an Account</button></p>
            ) : (
              <p className="text-gray-600 text-sm">Already have an account? <button onClick={handleViewToggle} className="text-amber-600 hover:text-amber-800 font-semibold transition-colors underline" disabled={isLoading}>Sign In</button></p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default VendorAuth;