/**
 * WhatsApp Integration Utilities
 */

export const generateWhatsAppMessage = (
  name: string,
  email: string,
  service: string,
  message: string
): string => {
  return `Hi! I'm ${name} (${email}). I'm interested in ${service}. ${message}`;
};

export const generateWhatsAppLink = (
  phoneNumber: string,
  message: string
): string => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

export const formatPhoneNumber = (phone: string): string => {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '');
  // Add country code if not present (assuming +1 for US)
  if (cleaned.length === 10) {
    return `1${cleaned}`;
  }
  return cleaned;
};
