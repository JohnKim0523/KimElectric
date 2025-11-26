# Setup Instructions - Kim Electric LLC

## Email Service Setup (Resend)

The contact form now uses Resend to send email notifications. Follow these steps to complete the setup:

### 1. Create a Resend Account
1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email address

### 2. Get Your API Key
1. Log in to your Resend dashboard
2. Go to API Keys section
3. Create a new API key
4. Copy the API key

### 3. Configure Environment Variables
1. Open the `.env.local` file in the root directory
2. Replace `your_resend_api_key_here` with your actual Resend API key:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   ```

### 4. Verify Your Domain (Optional but Recommended)
For production use, you should verify your domain:
1. In Resend dashboard, go to Domains
2. Add your domain (e.g., kimelectricllc.com)
3. Follow the DNS verification steps
4. Update `EMAIL_FROM` in `.env.local` to use your verified domain:
   ```
   EMAIL_FROM=noreply@kimelectricllc.com
   ```

**Note:** Without a verified domain, emails will be sent from `onboarding@resend.dev` and may have limitations.

### 5. Test the Contact Form
1. Start the development server: `npm run dev`
2. Go to the Contact page
3. Fill out and submit the form
4. Check that you receive an email at `kimelectricllc.us@gmail.com`

## Stripe Payment Setup

The contact page now includes an online payment section powered by Stripe. Follow these steps to complete the setup:

### 1. Create a Stripe Account
1. Go to [https://stripe.com](https://stripe.com)
2. Sign up for an account
3. Complete the verification process

### 2. Get Your API Keys
1. Log in to your Stripe Dashboard
2. Go to Developers > API keys
3. You'll see two keys:
   - **Publishable key** (starts with `pk_test_` or `pk_live_`)
   - **Secret key** (starts with `sk_test_` or `sk_live_`)

**Note:** Start with test keys (`pk_test_` and `sk_test_`) for development and testing.

### 3. Configure Environment Variables
1. Open the `.env.local` file in the root directory
2. Add your Stripe keys:
   ```
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_actual_publishable_key
   STRIPE_SECRET_KEY=sk_test_your_actual_secret_key
   ```

### 4. Test the Payment Form
1. Restart the development server: `npm run dev`
2. Go to the Contact page
3. Scroll to the "Payment Options" section
4. Click "Pay Now" to test the payment form

**Test Card Numbers:**
- Success: `4242 4242 4242 4242`
- Requires authentication: `4000 0025 0000 3155`
- Declined: `4000 0000 0000 9995`
- Use any future expiry date, any 3-digit CVC, and any postal code

### 5. Going Live
When you're ready to accept real payments:
1. Complete Stripe account activation
2. Replace test keys with live keys in `.env.local`:
   ```
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your_actual_publishable_key
   STRIPE_SECRET_KEY=sk_live_your_actual_secret_key
   ```
3. Test thoroughly before going live

### 6. Monitor Payments
- View all payments in your Stripe Dashboard
- Set up email notifications for new payments
- Configure webhooks for advanced payment tracking (optional)

## Important Security Notes

- **Never commit** your `.env.local` file to version control
- Keep your secret keys private
- Use test mode for development
- Only use live keys in production
