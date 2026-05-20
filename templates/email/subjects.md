# Subjects — Supabase Email Templates

Paste each subject into the corresponding template in:
**Supabase Dashboard → Authentication → Email Templates**

| Template | Subject |
|---|---|
| Magic link or OTP | `Tu enlace de acceso a Brújula Emocional` |
| Confirm sign up | `Confirma tu cuenta en Brújula Emocional` |
| Change email address | `Confirma tu nuevo email en Brújula Emocional` |

## Variables available in templates

| Variable | Description |
|---|---|
| `{{ .ConfirmationURL }}` | Magic link / confirmation URL |
| `{{ .Token }}` | OTP code (if using OTP instead of link) |
| `{{ .Email }}` | User's email address |
| `{{ .SiteURL }}` | Your site URL |
