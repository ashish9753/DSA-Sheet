# 🚨 CREATE EMAILJS TEMPLATE FROM SCRATCH - STEP BY STEP

## 📋 **EXACT Steps to Create Working Template**

### **Step 1: Go to EmailJS Dashboard**
1. Open: https://dashboard.emailjs.com/admin/templates
2. Click **"Create New Template"** button

### **Step 2: Basic Template Settings**
```
Template Name: Email Verification
Template ID: template_9eouah7 (keep your existing ID)
```

### **Step 3: Email Settings**
```
From Name: Programming Series Hub
From Email: programminghub82@gmail.com
Subject: Verify Your Email - Programming Series Hub
```

### **Step 4: Template Content (COPY EXACTLY)**

**Click on "Content" tab and paste this EXACT HTML:**

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
  <h1 style="color: #667eea; text-align: center;">Programming Series Hub</h1>
  
  <h2>Hello {{to_name}}!</h2>
  
  <p>Welcome to Programming Series Hub! Your account has been created with email: <strong>{{to_email}}</strong></p>
  
  <p>Please click the button below to verify your email address:</p>
  
  <div style="text-align: center; margin: 30px 0;">
    <a href="{{verification_link}}" style="background-color: #10b981; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; display: inline-block;">
      Verify My Email
    </a>
  </div>
  
  <p>This link will expire in 24 hours for security.</p>
  
  <p>Best regards,<br>Programming Series Hub Team</p>
</div>
```

### **Step 5: Template Variables**

**Make sure these variables are defined in the "Test" tab:**

```
to_name: John Doe
to_email: test@example.com
verification_link: https://example.com/verify
```

### **Step 6: Save and Test**
1. Click **"Save"** button
2. Click **"Send Test"** to verify template works
3. Check if test email arrives

---

## 🔧 **Alternative Simple Template (If Above Fails)**

If the above doesn't work, use this ULTRA-SIMPLE template:

```html
<p>Hello {{to_name}}</p>
<p>Email: {{to_email}}</p>
<p>Click here: <a href="{{verification_link}}">Verify</a></p>
<p>Programming Series Hub</p>
```

---

## 📱 **Template Variables Must Match Code**

Your code sends these variables:
- `to_name` ← User's name
- `to_email` ← User's email  
- `verification_link` ← Verification URL

**Template MUST use exactly: {{to_name}}, {{to_email}}, {{verification_link}}**

---

## 🧪 **Test Template in EmailJS**

1. Go to your template
2. Click **"Test"** tab
3. Fill in test values:
   ```
   to_name: Test User
   to_email: test@gmail.com
   verification_link: https://google.com
   ```
4. Click **"Send Test"**
5. Check if email arrives

---

## ✅ **Verification Checklist**

- [ ] Template ID: `template_9eouah7` 
- [ ] Variables: `{{to_name}}`, `{{to_email}}`, `{{verification_link}}`
- [ ] Subject: Set properly
- [ ] From email: programminghub82@gmail.com
- [ ] Test email sent successfully
- [ ] Template saved

---

## 🚀 **After Template is Created**

1. Test template in EmailJS dashboard first
2. Then test signup on your website
3. Check browser console for any errors

**Start with the SIMPLE template first, then make it fancy later!**
