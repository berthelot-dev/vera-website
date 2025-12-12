# Deploying to Vercel

## Quick Deploy Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Go to Vercel:**
   - Visit https://vercel.com
   - Sign up or log in (you can use your GitHub account)

3. **Import your project:**
   - Click "Add New..." → "Project"
   - Import your GitHub repository
   - Select the "Vera" repository

4. **Configure the project:**
   - Framework Preset: **Next.js** (should auto-detect)
   - Root Directory: Leave as default (or set to `.` if needed)
   - Build Command: `npm run build` (default)
   - Output Directory: Leave as default
   - Install Command: `npm install` (default)

5. **Add Environment Variables:**
   Click "Environment Variables" and add:
   ```
   CONTENTFUL_SPACE_ID=your_contentful_space_id
   CONTENTFUL_ACCESS_TOKEN=your_contentful_access_token
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   ```

6. **Deploy:**
   - Click "Deploy"
   - Wait for the build to complete (usually 2-3 minutes)
   - Your site will be live at `your-project-name.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```
   - Follow the prompts
   - When asked about environment variables, you can add them now or later in the dashboard

4. **For production deployment:**
   ```bash
   vercel --prod
   ```

## Troubleshooting Common Issues

### Issue: Build fails with font errors
**Solution:** The font configuration has been fixed. If you still see errors, try:
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Issue: Environment variables not working
**Solution:** 
- Make sure you've added them in Vercel Dashboard → Project Settings → Environment Variables
- Redeploy after adding environment variables
- Use `NEXT_PUBLIC_` prefix for client-side variables (EmailJS)

### Issue: Images not loading
**Solution:**
- Make sure all images are in the `public/` folder
- Check that image paths start with `/` (e.g., `/images/hero/main.jpg`)

### Issue: Contentful events not showing
**Solution:**
- Verify your Contentful credentials are correct in Vercel environment variables
- Check that events are published in Contentful
- Make sure the content model is named "event" (lowercase)

### Issue: Contact form not working
**Solution:**
- Verify all EmailJS environment variables are set in Vercel
- Make sure they have the `NEXT_PUBLIC_` prefix
- Check your EmailJS template configuration

## After Deployment

1. **Custom Domain (Optional):**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

2. **Automatic Deployments:**
   - Every push to your main branch will automatically deploy
   - You can also set up preview deployments for pull requests

3. **Monitoring:**
   - Check the Vercel dashboard for build logs
   - Monitor analytics in the Vercel dashboard

## Important Notes

- The free Vercel plan includes:
  - Unlimited deployments
  - 100GB bandwidth/month
  - Automatic SSL certificates
  - Global CDN

- Your site will be live at: `https://your-project-name.vercel.app`

- To update your site, just push to GitHub and Vercel will automatically redeploy!

