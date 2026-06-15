import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  const formSchema = z.object({
    name: z.string().min(2, { message: t('contactNameMinLength') || 'İsim en az 2 karakter olmalıdır.' }),
    email: z.string().email({ message: t('contactInvalidEmail') || 'Geçersiz e-posta adresi.' }),
    subject: z.string().min(5, { message: t('contactSubjectMinLength') || 'Konu en az 5 karakter olmalıdır.' }),
    message: z.string().min(10, { message: t('contactMessageMinLength') || 'Mesaj en az 10 karakter olmalıdır.' }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', subject: '', message: '' },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Burada form gönderme mantığı olacak
    alert(t('contactMessageSentSuccess') || 'Mesajınız başarıyla gönderildi!');
    form.reset();
  }

  return (
    <div className="pt-20 bg-background">
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            {t('contactTitle')}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            {t('contactSubtitle')}
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-24">
        <div className="grid lg:grid-cols-1 gap-12">
          <div className="text-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-center">{t('contactInfoTitle')}</h3>
              <div className="space-y-4 text-muted-foreground text-center">
                <div className="justify-center flex items-center gap-4"><MapPin className="h-6 w-6 text-primary" /><span>Tokyostraat 17b, 1175 RB Lijnden</span></div>
                <div className="justify-center flex items-center gap-4"><Mail className="h-6 w-6 text-primary" /><span>info@spaceautomotive.com</span></div>
                <div className="justify-center flex items-center gap-4"><Phone className="h-6 w-6 text-primary" /><span>+316 87 06 66 51</span></div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t">
               <h3 className="text-2xl font-bold mb-4 text-center">{t('contactInstantResponseTitle')}</h3>
               <p className="text-muted-foreground mb-6 text-center">{t('contactInstantResponseSubtitle')}</p>
               <Button asChild size="lg" className="w-full sm:w-auto mx-auto bg-[#25D366] hover:bg-[#128C7E] text-white font-bold shadow-lg transition-transform transform hover:scale-105">
                 <a href="https://wa.me/31687066651" target="_blank" rel="noopener noreferrer">
                   <MessageCircle className="mr-3 h-6 w-6" />
                   {t('contactWhatsAppButton')}
                 </a>
               </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
