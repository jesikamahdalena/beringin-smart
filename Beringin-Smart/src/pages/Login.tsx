import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonPage,
  IonCard,
  IonCardContent,
  IonInput,
  IonButton,
  IonIcon,
  IonToast,
  IonSpinner,
} from '@ionic/react';
import {
  mailOutline,
  lockClosedOutline,
  arrowForwardOutline,
  shieldCheckmarkOutline,
} from 'ionicons/icons';
import api from '../services/api';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      window.location.href = '/home';
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email || !password) {
      setErrorMessage('Harap isi alamat email dan kata sandi Anda!');
      return;
    }

    setLoading(true);
    try {
      const response = await api.post('/login', { email, password });
      if (response.data && response.data.token) {
        const resolvedRole = response.data.role || response.data.user?.role || 'siswa';
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('role', resolvedRole);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        window.location.href = '/home';
      } else {
        setErrorMessage('Format respon server tidak valid.');
      }
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.message) {
        setErrorMessage(err.response.data.message);
      } else if (err.response && err.response.status === 401) {
        setErrorMessage('Kombinasi email dan kata sandi salah!');
      } else {
        setErrorMessage('Gagal terhubung ke server backend.');
      }
    } finally {
      setLoading(false);
    }
  };

  const setPresetUser = (presetEmail: string) => {
    setEmail(presetEmail);
    setPassword('password123');
  };

  return (
    <IonPage>
      <IonContent
        className="ion-padding"
        style={{
          '--background': 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        } as React.CSSProperties}
      >
        <div style={{ maxWidth: '440px', margin: '40px auto 20px auto' }}>
          {/* Header Brand dengan Logo Sekolah */}
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <div
              style={{
                width: '84px',
                height: '84px',
                margin: '0 auto 16px auto',
                background: '#ffffff',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6px',
                boxShadow: '0 12px 28px rgba(0, 0, 0, 0.35)',
                border: '2px solid rgba(255, 255, 255, 0.85)',
              }}
            >
              <img
                src="/logo-smkn1beringin.png"
                alt="Logo SMKN 1 Beringin"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            <h1
              style={{
                margin: '0 0 6px 0',
                fontSize: '1.85rem',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-0.5px',
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              Beringin Smart
            </h1>
            <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.9rem', fontWeight: 500 }}>
              Portal Pengaduan Sarana & Prasarana • Jesika Sitorus Edition
            </p>
          </div>

          {/* Login Card Modern Slate */}
          <IonCard
            style={{
              margin: 0,
              borderRadius: '20px',
              background: '#ffffff',
              boxShadow: '0 20px 45px -10px rgba(0, 0, 0, 0.4)',
              border: '1px solid #e2e8f0',
              overflow: 'hidden',
            }}
          >
            <IonCardContent style={{ padding: '28px 24px' }}>
              <div style={{ marginBottom: '18px' }}>
                <h2
                  style={{
                    margin: '0 0 4px 0',
                    fontSize: '1.3rem',
                    fontWeight: 800,
                    color: '#0f172a',
                    fontFamily: "'Outfit', sans-serif",
                  }}
                >
                  Portal Autentikasi
                </h2>
                <p style={{ margin: 0, fontSize: '0.84rem', color: '#64748b' }}>
                  Gunakan email sekolah yang telah terdaftar
                </p>
              </div>

              {/* Quick Fill Pills */}
              <div style={{ marginBottom: '18px' }}>
                <span style={{ fontSize: '0.72rem', color: '#0284c7', fontWeight: 700, display: 'block', marginBottom: '6px', letterSpacing: '0.3px' }}>
                  AKUN UJI COBA CEPAT:
                </span>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    onClick={() => setPresetUser('jesika@beringin.sch.id')}
                    style={{
                      background: '#f0f9ff',
                      border: '1px solid #bae6fd',
                      borderRadius: '8px',
                      padding: '5px 10px',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      color: '#0284c7',
                      cursor: 'pointer',
                    }}
                  >
                    👤 Jesika (Siswa)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPresetUser('petugas@beringin.sch.id')}
                    style={{
                      background: '#fffbeb',
                      border: '1px solid #fde68a',
                      borderRadius: '8px',
                      padding: '5px 10px',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      color: '#b45309',
                      cursor: 'pointer',
                    }}
                  >
                    🛠️ Pak Teguh (Petugas)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPresetUser('siswa@beringin.sch.id')}
                    style={{
                      background: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      padding: '5px 10px',
                      fontSize: '0.74rem',
                      fontWeight: 600,
                      color: '#475569',
                      cursor: 'pointer',
                    }}
                  >
                    👤 Adrian (Umum)
                  </button>
                </div>
              </div>

              <form onSubmit={handleLogin}>
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.82rem', fontWeight: 600, color: '#334155' }}>
                    Alamat Email
                  </label>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      background: '#f8fafc',
                      border: '1.5px solid #cbd5e1',
                      borderRadius: '12px',
                      padding: '0 12px',
                    }}
                  >
                    <IonIcon icon={mailOutline} style={{ fontSize: '1.2rem', color: '#0284c7', marginRight: '8px' }} />
                    <IonInput
                      type="email"
                      value={email}
                      onIonInput={(e) => setEmail(e.detail.value!)}
                      placeholder="nama@beringin.sch.id"
                      required
                      style={{ fontSize: '0.92rem' }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '22px' }}>
                  <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.82rem', fontWeight: 600, color: '#334155' }}>
                    Kata Sandi
                  </label>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      background: '#f8fafc',
                      border: '1.5px solid #cbd5e1',
                      borderRadius: '12px',
                      padding: '0 12px',
                    }}
                  >
                    <IonIcon icon={lockClosedOutline} style={{ fontSize: '1.2rem', color: '#0284c7', marginRight: '8px' }} />
                    <IonInput
                      type="password"
                      value={password}
                      onIonInput={(e) => setPassword(e.detail.value!)}
                      placeholder="••••••••"
                      required
                      style={{ fontSize: '0.92rem' }}
                    />
                  </div>
                </div>

                <IonButton
                  expand="block"
                  type="submit"
                  disabled={loading}
                  style={{
                    height: '48px',
                    margin: 0,
                    '--background': 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
                    '--border-radius': '12px',
                    '--box-shadow': '0 8px 18px rgba(2, 132, 199, 0.35)',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                  }}
                >
                  {loading ? (
                    <IonSpinner name="crescent" color="light" />
                  ) : (
                    <>
                      Masuk ke Sistem <IonIcon slot="end" icon={arrowForwardOutline} />
                    </>
                  )}
                </IonButton>
              </form>
            </IonCardContent>
          </IonCard>

          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
              © 2026-2027 SMK Negeri 1 Beringin • Jesika Sitorus (XI PPLG 1) • SKKNI No. 282/2016
            </span>
          </div>
        </div>

        <IonToast
          isOpen={!!errorMessage}
          onDidDismiss={() => setErrorMessage('')}
          message={errorMessage}
          duration={3500}
          color="danger"
          position="top"
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
