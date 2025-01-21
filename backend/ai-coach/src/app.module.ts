import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CoachingModule } from './coaching/coaching.module';
import { ProgressModule } from './progress/progress.module';
import { WalletsModule } from './wallets/wallets.module';
import { OnboardingModule } from './onboarding/onboarding.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    CoachingModule,
    ProgressModule,
    WalletsModule,
    OnboardingModule,
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
