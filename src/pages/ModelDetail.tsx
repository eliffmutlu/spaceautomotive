import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { initialInventory } from './Models';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Car, MapPin, Gauge, Zap, GitBranch, Cog, ShieldCheck, SprayCan, Calendar, Palette, Wrench, ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslation } from 'react-i18next';

const ModelDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const car = initialInventory.find(c => c.id.toString() === id);

  const [offerData, setOfferData] = useState({ name: '', email: '', phone: '', offer: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setOfferData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmitOffer = (e: React.FormEvent) => {
    e.preventDefault();
    if (offerData.name && offerData.email && offerData.phone && offerData.offer) {
      console.log('Offer Submitted:', offerData);
      setIsSubmitted(true);
    } else {
      alert('Lütfen tüm alanları doldurun.');
    }
  };

  const resetForm = () => {
    setOfferData({ name: '', email: '', phone: '', offer: '' });
    setIsSubmitted(false);
    setDialogOpen(false);
  };

  if (!car) {
    return (
      <div className="pt-20 min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-4">{t('carNotFoundTitle')}</h1>
        <p className="text-muted-foreground mb-8">{t('carNotFoundSubtitle')}</p>
        <Link to="/models">
          <Button>{t('seeAllCarsButton')}</Button>
        </Link>
      </div>
    );
  }

  const getPaintStatusText = (painted: boolean, replaced: boolean) => {
    if (!painted && !replaced) return t('unpaintedUnreplaced');
    if (painted && !replaced) return t('painted');
    if (!painted && replaced) return t('replaced');
    return t('paintedReplaced');
  };

  return (
    <div className="pt-24 bg-background">
      <div className="container mx-auto px-4 pb-24">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t('backToAllCars')}
        </Button>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-8">
          {car.brand} {car.model}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left Column: Image Carousel */}
          <div className="lg:col-span-3">
            <Carousel className="w-full rounded-lg overflow-hidden">
              <CarouselContent>
                {car.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <img src={image} alt={`${car.brand} ${car.model} - ${index + 1}`} className="w-full h-auto aspect-video object-cover" />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="ml-16" />
              <CarouselNext className="mr-16" />
            </Carousel>
          </div>

          {/* Right Column: Details */}
          <div className="lg:col-span-2">
            <p className="text-3xl font-bold text-white mb-6">€{car.price.toLocaleString()}</p>
            
            <Card className="bg-secondary/50 border-border">
              <CardHeader>
                <CardTitle>{t('carFeatures')}</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-x-4 gap-y-4 text-sm">
                <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-primary" /> <span><strong className="font-semibold">{t('yearLabel')}:</strong> {car.year}</span></div>
                <div className="flex items-center gap-2"><Palette className="h-4 w-4 text-primary" /> <span><strong className="font-semibold">{t('colorLabel')}:</strong> {car.color}</span></div>
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-primary" /> <span><strong className="font-semibold">{t('fuelTypeLabel')}:</strong> {car.fuelType}</span></div>
                <div className="flex items-center gap-2"><Cog className="h-4 w-4 text-primary" /> <span><strong className="font-semibold">{t('transmissionLabel')}:</strong> {car.transmission}</span></div>
                <div className="flex items-center gap-2"><Gauge className="h-4 w-4 text-primary" /> <span><strong className="font-semibold">{t('powerLabel')}:</strong> {car.enginePower} HP</span></div>
                <div className="flex items-center gap-2"><Wrench className="h-4 w-4 text-primary" /> <span><strong className="font-semibold">{t('engineLabel')}:</strong> {car.engineSize > 0 ? `${car.engineSize.toFixed(1)}L` : 'N/A'}</span></div>
                <div className="flex items-center gap-2"><GitBranch className="h-4 w-4 text-primary" /> <span><strong className="font-semibold">{t('drivetrainLabel')}:</strong> {car.drivetrain}</span></div>
                <div className="flex items-center gap-2"><Car className="h-4 w-4 text-primary" /> <span><strong className="font-semibold">{t('bodyTypeLabel')}:</strong> {car.bodyType}</span></div>
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> <span><strong className="font-semibold">{t('locationLabel')}:</strong> {car.location}</span></div>
              </CardContent>
            </Card>
            
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="w-full text-lg">{t('makeOfferButton')}</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  {!isSubmitted ? (
                    <>
                      <DialogHeader>
                        <DialogTitle>{t('makeOfferTitle', { brand: car.brand, model: car.model })}</DialogTitle>
                        <DialogDescription>
                          {t('currentPriceText', { price: car.price.toLocaleString() })}. Lütfen bilgilerinizi ve teklifinizi girin.
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleSubmitOffer}>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                              {t('nameLabel')}
                            </Label>
                            <Input id="name" value={offerData.name} onChange={handleInputChange} className="col-span-3" required />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="email" className="text-right">
                              {t('emailLabel')}
                            </Label>
                            <Input id="email" type="email" value={offerData.email} onChange={handleInputChange} className="col-span-3" required />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="phone" className="text-right">
                              {t('phoneLabel')}
                            </Label>
                            <Input id="phone" type="tel" value={offerData.phone} onChange={handleInputChange} className="col-span-3" required />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="offer" className="text-right">
                              {t('offerLabel')}
                            </Label>
                            <Input id="offer" type="number" value={offerData.offer} onChange={handleInputChange} className="col-span-3" placeholder={`Örn: ${Math.round(car.price * 0.95)}`} required />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button type="submit">{t('sendOfferButton')}</Button>
                        </DialogFooter>
                      </form>
                    </>
                  ) : (
                    <>
                      <DialogHeader>
                        <DialogTitle>{t('offerReceivedTitle')}</DialogTitle>
                        <DialogDescription>
                          {t('offerReceivedSubtitle')}
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <Button onClick={resetForm}>{t('closeButton')}</Button>
                      </DialogFooter>
                    </>
                  )}
                </DialogContent>
              </Dialog>
              <Link to="/contact" className="w-full">
                <Button size="lg" variant="outline" className="w-full text-lg">{t('contactButton')}</Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section: Expert Report */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{t('expertiseInfoTitle')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">{t('statusInfoTitle')}</h3>
                  <div className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-primary" /> {t('damageRecordLabel')}: <Badge variant={car.hasDamage ? 'destructive' : 'secondary'}>{car.hasDamage ? 'Var' : 'Yok'}</Badge></div>
                  <div className="flex items-center gap-2"><SprayCan className="h-5 w-5 text-primary" /> {t('paintReplaceLabel')}: <Badge variant="secondary">{getPaintStatusText(car.painted, car.replaced)}</Badge></div>
                </div>
                {car.replacedParts.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">{t('replacedPartsTitle')}</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      {car.replacedParts.map(part => <li key={part}>{part.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</li>)}
                    </ul>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ModelDetail;
